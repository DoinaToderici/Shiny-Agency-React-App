import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const HeandelForm = async (e) => {
    e.preventDefault();

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      // formRef.current.reset();
      setValidation("");
      navigate("/");
    } catch (err) {
      setValidation("Password not correct !");
    }
  };

  return (
    <div className="registartion-page col-3 mx-auto text-center">
      <h1>Connexion</h1>
      <form ref={formRef} onSubmit={HeandelForm} className="row p-5 bg-white">
        <div className="mb-3">
          <input
            ref={addInputs}
            value={email}
            className="col-12 p-2"
            type="email"
            placeholder="your.email@gmail.com"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="text-danger"></p>
        </div>
        <div className="mb-3">
          <input
            ref={addInputs}
            value={pass}
            className="col-12 p-2"
            type="password"
            placeholder="your pasword"
            id="password"
            name="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <p className="text-danger">{validation}</p>
        <button className="col-6 mx-auto btn btn-success">Log In</button>
      </form>
      <p>
        You have account ?
        <Link className="btn mr-3" to="/connexion/login">
          Log In
        </Link>
      </p>
    </div>
  );
};
