import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import "./home.css";

function Home() {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return (
    <div className="app-home container text-center">
      {currentUser ? (
        <span className="connected-msg">Hello, you are connected</span>
      ) : (
        <span className="unconnected-msg">Hello, connect you</span>
      )}
      <h2 className="col-6 mx-auto mt-5">
        Les compétences dont vous avez besoin :{" "}
        <span>UX Design, frontend, backend</span>
      </h2>
      <Link to="/freelances" className="cta-primary mx-auto">
        Découvrez nos profils
      </Link>
      <div className="col-6 mx-auto mt-5 text-start">
        <p>
          <span className="d-block">UX Design</span>
          Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>
        <p>
          <span className="d-block">Frontend</span>dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
        <p>
          <span className="d-block">Backend</span>consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Home;
