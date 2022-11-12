import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../utils/notifications";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const navigate = useNavigate();

	//*******  Local Storage (Persistent login) ******* //

	//*******************  States **************************** //

	const [isAuthenticated, setIsAuthenticated] = useState(
		() => JSON.parse(localStorage.getItem("user")) || false
	);

  const [accountData, setAccountData] = useState()
  const [registerData, setRegisterData] = useState()
	const [resultLogin, setResultLogin] = useState(null);
	const [token, setToken] = useState(null);
	const [dataLogin, setDataLogin] = useState({
		email: "",
		password: "",
	});

	const [dataSignUp, setDataSignUp] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	});

	// SIGN-UP
	async function signUp(e) {
		e.preventDefault();
		try {
			// If name or lastname contains numbers, throw error
			if (dataSignUp.first_name.match(/\d+/g) || dataSignUp.last_name.match(/\d+/g)) {
				errorNotification("El nombre o apellido no pueden contener números");
				return
			}
			const response = await fetch(
				"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(dataSignUp),
				}
			);
			const data = await response.json();
			console.log(data)
			if (data.error) {
				errorNotification(data.error);
			}
			setRegisterData(data)
			successNotification("Usuario creado con éxito");
	  		setDataSignUp({
				...dataSignUp,
				first_name: "",
				last_name: "",
				email: "",
				password: "",
			});
		} catch (error) {
			console.log("Error: ", error);
			setDataSignUp({
				...dataSignUp,
				first_name: "",
				last_name: "",
				email: "",
				password: "",
			});
		}
	}
	//

  const createAccount = async(id, accessToken) => {

    const date = new Date().toISOString().replace('T', ' ').replace('Z', '');

    const body = {creationDate: date, money: 25000, isBlocked: false, userId: id}

    try {
        const response = await fetch('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts', {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          method: "POST",
          body: JSON.stringify(body),
        })
        const data = await response.json()
        if (data.id) {
          setAccountData(data)
          localStorage.setItem("account", JSON.stringify(data))
        }
    } catch (error) {
        console.log(error)
    }
  };

  // LOGIN
  async function login(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login", {
        body: JSON.stringify(dataLogin),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      const data = await response.json()
	  if(data.status === 401) {
		errorNotification("Invalid credentials")
		return
	  }
      const account = JSON.parse(localStorage.getItem("account")) || false
      if (account === false) {
        createAccount(registerData.id , data.accessToken)
      }
      setIsAuthenticated(true);
      await getLogin(data.accessToken);
      setDataLogin({ ...dataLogin, email: "", password: "" });
	  navigate('/');
    } catch (error) {
      console.log("Error: ", error);
      setDataLogin({ ...dataLogin, email: "", password: "" });
      setIsAuthenticated(false);
    }
  }
  // GET LOGIN
  async function getLogin(token) {
    try {
      setToken(token);
      const bearerToken = `Bearer ${token}`;
      const response = await fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: bearerToken
        },
        method: "GET"
      })
      const data = await response.json()
      setResultLogin(data);
    } catch (error) {
      console.log(error)
    }
  }

  const getToken = () => {
		const user = JSON.parse(localStorage.getItem("user"));
		const token = user.token;
		return token;
	};

	const getUser = () => {
		const user = JSON.parse(localStorage.getItem("user")) || false;
		const userInfo = user.user;
		return userInfo;
	};

  const getAccountID = () => {
		const user = JSON.parse(localStorage.getItem("account"))["id"];
		return user;
	};

	useEffect(() => {
		if (resultLogin && token) {
			localStorage.setItem(
				"user",
				JSON.stringify({
					user: {...resultLogin},
					token: token,
					isLogin: isAuthenticated,
				})
			);
		}
	}, [resultLogin, token, isAuthenticated]);

	return (
		<AuthContext.Provider
			value={{
				setDataLogin,
				setDataSignUp,
				login,
				signUp,
				getToken,
				getAccountID,
				getUser,
				resultLogin,
				token,
				isAuthenticated,
				dataSignUp,
				dataLogin,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider

