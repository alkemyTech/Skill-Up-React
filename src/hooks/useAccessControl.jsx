import { useState } from "react";
import axios from "axios";
import useFetchData from "./useFetchData";

export function useAccessControl() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [resultLogin, setResultLogin] = useState();
	const [token, setToken] = useState("");
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
			console.log(data.accessToken)
			getLogin(data.accessToken);
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
			console.log(data);
			console.log("Autorizado");
			setIsAuthenticated(true);
			setResultLogin(data);
		} catch (error) {
			console.log(error);
		}
	}

	return {
		setDataLogin,
		setDataSignUp,
		login,
		signUp,
		isAuthenticated,
		dataSignUp,
		dataLogin,
	};
}
