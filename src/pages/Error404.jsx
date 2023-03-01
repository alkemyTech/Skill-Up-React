import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import error404 from "../assets/images/error404.png";

export const Error404 = () => {
  return (
    <div className="Content text-center d-flex align-items-center justify-content-center animate__animated animate__fadeIn pb-3">
      <div className="text-center">
        <div className="">
          <img className="img-fluid col-sm-6 ms-sm-4" src={error404} alt="" />
        </div>

        <Link className="nav-link" to="/">
          <Button variant="btn btn-primary">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};
