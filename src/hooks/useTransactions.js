/* eslint-disable comma-dangle */
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import alkemyApi from "../api/login";
import { getReceptorName, searchUser, searchuser } from "../helper/helper";
import { setTransactions, setPage, setLoadingOn, setLoadingOff } from "../redux/slices/transactions.slice";
import { setBalance } from "../redux/slices/user.slice";
export const useTransactions = () => {
  const transactions = useSelector((state) => state.transactions);
  const user = useSelector((state) => state.user.user);
  const { balance } = useSelector((state) => state.user.acquisition);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const Autorizacion = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getTransactions = async (page = 1) => {
    try {
      const response = await alkemyApi.get(
        `/transactions/?page=${page}`,
        Autorizacion
      );
      const data = response.data.data;
      const nextPage = response.data.nextPage;

      dispatch(setTransactions(data));

      if (nextPage) dispatch(setPage(true));
      else dispatch(setPage(false));

      const topups = data
        .filter((item) => item.type === "topup")
        .reduce((prev, curr) => prev + Number(curr.amount), 0);
      const payments = data
        .filter((item) => item.type === "payment")
        .reduce((prev, curr) => prev + Number(curr.amount), 0);
      const balance = topups - payments;
      const acquisition = {
        balance,
        payments,
        topups,
      };
      dispatch(setBalance(acquisition));
    } catch (error) {
      console.log("no anduvo");
    }
  };

  const createOperation = async (operation, type) => {
    const userId = user?.id;
    console.log(userId);
    if (!userId) return { error: "Intentelo mas tarde" };

    if (type === "payment" && balance - operation.amount < 0) {
      return { error: "Saldo insuficiente" };
    }

    const operationUpdated = { ...operation, type, userId };

    try {
      console.log(operationUpdated);
      const response = await alkemyApi.post(
        "/transactions",
        operationUpdated,
        Autorizacion
      );
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  };
  const createTransaction = async ({ receptorId, description, amount }) => {
    dispatch(setLoadingOn());
    try {
      const { userId } = await searchUser(receptorId, Autorizacion);
      const { first_name } = await getReceptorName(userId, Autorizacion);
      dispatch(setLoadingOff());
      Swal.fire({
        html: `<h4>Estas seguro que deseas enviar <span style="color:green;font-size:24px;">$${amount}</span> a <span style="color:blue;font-size:24px;text-transform:capitalize;">${first_name}</span>?</h4>`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        // eslint-disable-next-line comma-dangle
        confirmButtonText: "Si, envialo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const resPost = await alkemyApi.post(
            `/accounts/${receptorId}`,
            {
              type: "payment",
              concept: description,
              // eslint-disable-next-line comma-dangle
              amount: Number(amount),
            },
            Autorizacion
            );
          console.log(resPost.data);
          Swal.fire(
            "Enviado!",
            "La transaccion fue realizada satisfactoriamente",
            "success"
            );
          }
        });
    } catch (error) {
      dispatch(setLoadingOff());
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return {
    transactions,
    getTransactions,
    createOperation,
    Autorizacion,
    createTransaction,
  };
};
