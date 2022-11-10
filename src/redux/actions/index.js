//import axios from "axios";
import fetchWalletApi from "../../api/fetchWalletApi";

export const POST_NEW_USER = "POST_NEW_USER";
export const POST_ACCOUNT = "POST_ACCOUNT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const POST_ADD_CASH = "POST_ADD_CASH";
export const GET_BALANCE = "GET_BALANCE";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_ALL_USERS_WITH_ACCOUNT = "GET_ALL_USERS_WITH_ACCOUNT";

//const API_SWAGGER= 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'

let date = new Date();
let dateStr =
    date.getFullYear() +
    "-" +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + date.getDate()).slice(-2) +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);

export const createUser = (user) => {
    return async function (dispatch) {
        try {
            //create the user
            const response = await fetchWalletApi.post(`/users`, user);

            //login the user
            const emailAndPasword = {
                email: user.email,
                password: user.password,
            };
            /* dispatch( login(emailAndPasword) ) */

            //create the account
            console.log(response.data.id);
            dispatch(createAccount(response.data.id, emailAndPasword));

            return dispatch({
                type: POST_NEW_USER,
                payload: true,
            });
        } catch (e) {
            return dispatch({
                type: POST_NEW_USER,
                payload: false,
            });
        }
    };
};

export const createAccount = (id, emailAndPasword) => {
    return async function (dispatch) {
        // obtener la fecha de hoy en formato `yyyy-mm-dd 00:00:00`
        console.log("estamos en account");

        // get jwt from api
        const authLogin = await fetchWalletApi.post(
            `/auth/login`,
            emailAndPasword
        );
        localStorage.setItem("token", authLogin.data.accessToken);

        const data = {
            creationDate: `${dateStr}`,
            money: 0,
            isBlocked: false,
            userId: id,
        };

        /* s */

        //create the account whit this date
        let account = await fetchWalletApi.post(`/accounts`, data);
        console.log([account.data]);

        const deposit = {
            type: "topup",
            concept: "initial",
            amount: 0,
        };

        const initialTopup = await fetchWalletApi.post(
            `/accounts/${account.data.id}`,
            deposit
        );

        const userDetail = await fetchWalletApi.get(`/auth/me`);
        const accountDetail = await fetchWalletApi.get(
            `/accounts/${account.data.id}`
        );

        return dispatch({
            type: POST_ACCOUNT,
            payload: {
                user: userDetail.data,
                account: accountDetail.data,
                active: true,
            },
        });
    };
};

export const login = (user) => {
    return async function (dispatch) {
        try {
            // get jwt from api
            const response = await fetchWalletApi.post(`/auth/login`, user);
            localStorage.setItem("token", response.data.accessToken);

            // get the user data and set on localsatorage
            /*  let tokenBody = { headers: { Authorization: `Bearer ${response.data.accessToken}` }} */

            let info = await fetchWalletApi.get(`/auth/me`);

            //set info in local starage
            const userDataStorage = {
                first_name: info.data.first_name,
                last_name: info.data.last_name,
                email: info.data.email,
                roleId: info.data.roleId,
                id: info.data.id,
            };
            localStorage.setItem("user", JSON.stringify(userDataStorage));

            const transactionsUser = await fetchWalletApi.get(`/transactions`);

            const initialTopup = transactionsUser.data.data.find(
                (transactions) => transactions.type === "topup"
            );

            console.log(transactionsUser.data);
            console.log(initialTopup);

            const idAccount = initialTopup.accountId;
            const account = await fetchWalletApi.get(`/accounts/${idAccount}`);

            // set de user data on redux
            return dispatch({
                type: LOGIN,
                payload: { active: true, user: info.data, account: account.data },
            });
        } catch (e) {
            console.log(e);
            return dispatch({
                type: LOGIN,
                payload: { active: false, user: {}, account: {} },
            });
        }
    };
};

export const logout = () => {
    localStorage.clear();
    return {
        type: LOGOUT,
    };
};

export const addMoneyToAccount = (amount, id) => {
    return async function (dispatch) {
        const deposit = {
            type: "topup",
            concept: "Add money",
            amount: amount,
        };

        /* const token = localStorage.getItem('token');
          const tokenBody = { headers: { Authorization: `Bearer ${token}`} }; */

        const info = await fetchWalletApi.post(`/accounts/${id}`, deposit);

        const detailAccount = await fetchWalletApi.get(`/accounts/${id}`);

        return dispatch({
            type: POST_ADD_CASH,
            payload: detailAccount.data,
        });
    };
};

export const balance = () => {
    return async function (dispatch) {
        /* const token = localStorage.getItem('token');
          const tokenBody = { headers: { Authorization: `Bearer ${token}`} }; */

        //const dataTransactions = await fetchWalletApi.get(`/transactions`);

        let numberTransactionsPage = 1;
        let condicionTransactions = true;

        let transactionsArray = [];


        do {
            let dataTransactions = await fetchWalletApi.get(
                `/transactions/?page=${numberTransactionsPage}`
            );
            transactionsArray.push(...dataTransactions.data.data);
            dataTransactions.data.nextPage ? condicionTransactions = true : condicionTransactions = false;
            numberTransactionsPage++;
        } while (condicionTransactions);


        const topup = transactionsArray.filter(
            (transaction) => transaction.type === "topup"
        );
        const payment = transactionsArray.filter(
            (transaction) => transaction.type === "payment"
        );

        const initialValue = 0;
        const balanceTopup = topup.reduce(
            (previousAmount, currentAmount) =>
                Number(currentAmount.amount) + Number(previousAmount),
            initialValue
        );

        const balancePayment = payment.reduce(
            (previousAmount, currentAmount) =>
                Number(currentAmount.amount) + Number(previousAmount),
            initialValue
        );

        const totalBalance = balanceTopup - balancePayment;

        return dispatch({
            type: GET_BALANCE,
            payload: {
                topup: balanceTopup,
                payments: balancePayment,
                totalBalance,
            },
            topupList: topup,
            paymentsList: payment,
        });
    };
};

export const userData = () => {
    return async function (dispatch) {
        /*  const token = localStorage.getItem('token');
          const tokenBody = { headers: { Authorization: `Bearer ${token}`} }; */

        const userDetail = await fetchWalletApi.get(`/auth/me`);

        const transactionsUser = await fetchWalletApi.get(`/transactions`);

        const initialTopup = transactionsUser.data.data.find(
            (transactions) => transactions.type === "topup"
        );

        const idAccount = initialTopup.accountId;
        const account = await fetchWalletApi.get(`/accounts/${idAccount}`);

        return dispatch({
            type: GET_USER_DATA,
            payload: { user: userDetail.data, account: account.data },
        });
    };
};

export const getAllUsersWithAccount = () => {
    return async function (dispatch) {
        let numberAccountPage = 1;
        let accountArray = [];

        let condicionAccount = true;

        do {
            let accountsLists = await fetchWalletApi.get(
                `/accounts/?page=${numberAccountPage}`
            );
            accountArray.push(...accountsLists.data.data);
            accountsLists.data.nextPage ? condicionAccount = true : condicionAccount = false;
            numberAccountPage++;
        } while (condicionAccount);


        accountArray = accountArray.filter(account => account.money !== null && account.isBlocked !== true
            && account.isBlocked !== null)

        accountArray = accountArray.flat();
        console.log(accountArray);


        let arrayUsers = [];

        accountArray.forEach(async (account) => {
            let user = await fetchWalletApi.get(
                `/users/${account.userId}`
            );

            user.data.accountId = account.id;

            arrayUsers.push(user.data)
        });

        console.log(arrayUsers + ' despues del forEach')

        return dispatch({
            type: GET_ALL_USERS_WITH_ACCOUNT,
            payload: arrayUsers,
        });
    };
};


export const sendMoneyToUser = (destinyAccountId, amountToSend, concept, moneyInMyAccount, idOfMyAccont, idMyUser) => {
    return async function (dispatch) {

        let paymentBody = {
            type: "payment",
            concept: concept,
            amount: amountToSend
        }

        await fetchWalletApi.post(`/accounts/${destinyAccountId}`, paymentBody);

        let NewAmount = Number(moneyInMyAccount) - Number(amountToSend)

        let putNewAmount = {
            creationDate: dateStr,
            money: NewAmount,
            isBlocked: false,
            userId: idMyUser
        }

        await fetchWalletApi.put(`/accounts/${idOfMyAccont}`, putNewAmount);
        dispatch(userData())
    };
};