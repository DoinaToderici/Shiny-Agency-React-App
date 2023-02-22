import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Connexion = () => {
  return (
    <>
      <Outlet />
      <div className="links-container d-flex justify-content-center mx-auto">
        <Link to="/connexion/login" className="btn btn-primary">
          Log In
        </Link>
        <Link to="/connexion/registration" className="btn btn-primary ms-3">
          Registration
        </Link>
      </div>
    </>
  );
};
