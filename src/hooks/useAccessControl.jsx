import { useState } from "react";
import axios from "axios";

export function useAccessControl() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataToken, setDataToken] = useState("");
  const [resultLogin, setResultLogin] = useState();

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
  function signUp(e) {
    e.preventDefault();
    console.log("SIGN-UP-FORM: ", dataSignUp);

    const headers = {
      "Content-type": "application/json",
      Accept: "application/json",
    };

    axios
      .post(
        "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users",
        dataSignUp,
        { headers }
      )
      .then((res) => {
        console.log("Result: ", res);
        setDataSignUp({
          ...dataSignUp,
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
        setDataSignUp({
          ...dataSignUp,
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
      });
  }
  //

  // LOGIN
  function login(e) {
    e.preventDefault();

    console.log("LOGIN-FORM: ", dataLogin);

    const headers = {
      "Content-type": "application/json",
      Accept: "application/json",
    };

    axios
      .post(
        "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login",
        dataLogin,
        { headers }
      )
      .then((res) => {
        console.log("Result: ", res);
        setDataLogin({ ...dataLogin, email: "", password: "" });
        setDataToken(res);
        setIsAuthenticated(true);
        getLogin();
      })
      .catch((error) => {
        console.log("Error: ", error);
        setDataLogin({ ...dataLogin, email: "", password: "" });
        setIsAuthenticated(false);
      });
  }
  //

  // GET LOGIN
  function getLogin() {
    const headers = {
      Authorization: `Bearer ${dataToken}`,
      Accept: "application/json",
    };

    axios
      .get(
        "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me",
        headers
      )
      .then((res) => {
        console.log("LoginUserResualt: ", res);
        setResultLogin(res);
      })
      .catch((error) => {
        console.log("ErrorLoginUserResualt: ", error);
      });
  }
  //

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
