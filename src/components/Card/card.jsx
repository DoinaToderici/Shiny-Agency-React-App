import React from "react";
import "./card.css";

function Card({ name, job, picture }) {
  return (
    <div className="col-4 mb-4">
      <div className="card h-100 py-4 px-3 text-center">
        <img
          src={picture}
          alt={`Image de ${name}`}
          className="card-image col-4"
        ></img>
        <span className="person-name">{name}</span>
        <span>{job}</span>
      </div>
    </div>
  );
}

export default Card;
