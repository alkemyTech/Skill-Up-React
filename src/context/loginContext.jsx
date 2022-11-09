import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const navigate = useNavigate();

	//*******  Local Storage (Persistent login) ******* //

	//*******************  States **************************** //

	const [isAuthenticated, setIsAuthenticated] = useState(
		() => JSON.parse(localStorage.getItem("user")) || false
	);
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
			console.log("SIGN-UP-FORM: ", dataSignUp);
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
			console.log("SIGN-UP-RESPONSE: ", data);
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

	// LOGIN
	async function login(e) {
		e.preventDefault();
		try {
			const response = await fetch(
				"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login",
				{
					body: JSON.stringify(dataLogin),
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					method: "POST",
				}
			);
			const data = await response.json();
			setDataLogin({ ...dataLogin, email: "", password: "" });
			setIsAuthenticated(true);
			getLogin(data.accessToken);
			navigate("/");
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
			const response = await fetch(
				"http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me",
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: bearerToken,
					},
					method: "GET",
				}
			);
			const data = await response.json();
			setResultLogin(data);
		} catch (error) {
			console.log(error);
		}
	}

	const getToken = () => {
		const user = JSON.parse(localStorage.getItem("user"));
		const token = user.token;
		return token;
	};

	useEffect(() => {
		if (resultLogin && token) {
			localStorage.setItem(
				"user",
				JSON.stringify({
					user: resultLogin,
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
				resultLogin,
				getToken,
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

export default AuthContextProvider;
