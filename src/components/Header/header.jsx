import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import Logo from "../../assets/images/dark-logo.png";
import "./header.css";

function Header() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      alert("For some reasons youcan't deconnect");
    }
  };

  return (
    <div className="header d-flex justify-content-between align-items-center px-3">
      <Link to="/">
        <img src={Logo} alt="Logo" className="py-2" width="150px" />
      </Link>
      <nav>
        <Link className="m-2 p-2 btn" to="/">
          Home
        </Link>
        <Link className="m-2 p-2 btn" to="/survey">
          Survey
        </Link>
        <Link className="m-2 p-2 btn" to="/results">
          Results
        </Link>
        <Link className="m-2 p-2 btn" to="/freelances">
          Freelances
        </Link>

        {currentUser ? (
          <spann onClick={logOut} className="btn btn-danger">
            Log Out
          </spann>
        ) : (
          <>
            <Link to="/connexion/login" className="btn btn-connexion">
              Log In
            </Link>
            <Link
              to="/connexion/registration"
              className="btn btn-connexion ms-3"
            >
              Registration
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
