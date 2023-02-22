import React from "react";
import { Link } from "react-router-dom";
import surveyHome from "../../../src/assets/illustrations/survey-home-img.svg";

function homeSurvey() {
  return (
    <div className="container row mx-auto align-items-center">
      <div className="col-4 p-3">
        <h1>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents.
        </h1>
        <Link to="/survey/1" className="cta-primary">
          Faire le test
        </Link>
      </div>
      <div className="col-8 p-3 d-flex justify-content-center">
        <img src={surveyHome} alt="Survey home image" />
      </div>
    </div>
  );
}

export default homeSurvey;
