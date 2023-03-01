import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import icons from "../assets/icons";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { Logout } = useAuth();
  const { first_name } = useSelector(state => state.user.user);

  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {

  }, [first_name]);
  return (
    <nav className="header navbar navbar-expand-md personalized">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/dzko626wf/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669736491/ra6y0vlvmxqeo4valime.jpg"
            alt="AlkyBank"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Balance">
                Balance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Movimientos">
                Movimientos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/CargaSaldo">
                Carga Saldo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Gastos">
                Tus Gastos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/EnvioDinero">
                Manda Plata!
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center ">
              <img className="mb-1"
              role="button"
                src={icons.userIcon}
                alt="userIcon"
                width="16"
                height="16"
                onClick={() => setMostrar(!mostrar)}
              />
              {mostrar && (
                <div
                  className={
                    "userAbsolute shadow-lg mt-2 p-3 mb-5 bg-body rounded p-3 mb-5 bg-body rounded position-absolute  top-50 border   w-180 flex-col items-center justify-center rounded-bl-lg rounded-br-lg rounded-tl-lg bg-ct-secondary-600 p-4 shadow-2xl shadow-slate-500"
                  }
                >
                  <p
                    onClick={() => setMostrar(!mostrar)}
                    className="mb-3  text-center font-bold"
                    data-close={true}
                  >
                    {first_name && first_name.charAt(0).toUpperCase() + first_name.slice(1)}
                  </p>
                  <Link
                    to={"/"}
                    className="nav-link border-2 border-secondary"
                    onClick={Logout}
                  >
                    <Button variant="btn-danger" action={Logout}>
                      Desloguearse
                    </Button>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
