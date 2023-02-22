import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./spinner.css";

function Spinner() {
  return (
    <>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </>
  );
}

export default Spinner;
