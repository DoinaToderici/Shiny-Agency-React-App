import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const HeandelForm = async (e) => {
    e.preventDefault();
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("Min 6 chars");
      return;
    }
    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Password do not match");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      navigate("/");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }
    }
  };

  return (
    <div className="registartion-page col-3 mx-auto text-center">
      <h1>Registration</h1>
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
        <div className="mb-3">
          <input
            ref={addInputs}
            value={confirmPass}
            className="col-12 p-2"
            type="password2"
            placeholder="confirm password"
            id="password2"
            name="password2"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
          />
          <p className="text-danger">{validation}</p>
        </div>
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
