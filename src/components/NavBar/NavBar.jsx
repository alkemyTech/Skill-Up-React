import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Title/Title";
export const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState(null);

  const navigate = useNavigate();

  let userData = localStorage.getItem("userData");

  useEffect(() => {
    if (!!userData) {
      setIsLogin(true);
      setFirstName(JSON.parse(userData).first_name);
    }
  }, []);

  const clearStorage = () => {
    localStorage.removeItem("userData");
    navigate("/", { redirect: true });
    setIsLogin(false);
    setFirstName(null);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <div id="nav-left-container">
            <Link to="/" className="nav-link">
              <img
                src={require("./assets/logo.png")}
                alt="brand-logo"
                /* Cambiar tamaños */ width="30"
                /* Cambiar tamaños */ height="24"
              />
              {!isLogin ? (
                <span className="ms-2 text-capitalize nav-item">
                  ¡Bienvenido!
                </span>
              ) : (
                <span className="ms-2 text-capitalize nav-item">
                  {firstName}
                </span>
              )}
            </Link>
          </div>

          <div
            id="nav-right-container"
            className="collapse navbar-collapse d-flex justify-content-end"
          >
            {!isLogin ? (
              <div>
                <Link to="/">
                  <button className="btn btn-primary">Login</button>
                </Link>

                <button className="btn btn-warning ms-3">Register</button>
              </div>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/charge" className="nav-link">
                    Carga de saldo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/spents" className="nav-link">
                    Gastos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/balance" className="nav-link">
                    Balance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movements" className="nav-link">
                    Movimientos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/transfers" className="nav-link">
                    Envio de dinero
                  </Link>
                </li>
                <Link to="/">
                  <button
                    onClick={() => clearStorage()}
                    className="btn btn-danger"
                  >
                    LogOut
                  </button>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
