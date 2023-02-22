import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "../../components/Spiner/spiner";
import useFetch from "../../Hooks/fetchedDatas";
import "./survey.css";

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;

  const { data, isLoading } = useFetch(`http://localhost:8000/survey`);

  return (
    <div className="survey-page text-center">
      <h1>Questionnaire</h1>
      <div>
        <p className="my-5">
          {isLoading ? <Spinner /> : data && data.surveyData[questionNumber]}
        </p>
        <div className="d-flex justify-content-center my-5">
          <button>Oui</button>
          <button>Non</button>
        </div>
      </div>
      <div className="links-wrapper">
        {questionNumberInt > 1 && (
          <Link to={`/survey/${prevQuestionNumber}`} className="btn">
            {" "}
            Précédent
          </Link>
        )}

        {questionNumberInt === 5 ? (
          <Link to="/results" className="btn mr-3">
            Résultats
          </Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`} className="btn">
            Suivant
          </Link>
        )}
      </div>
    </div>
  );
}

export default Survey;
