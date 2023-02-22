import React from "react";
import errorImage from "../../assets/illustrations/404-img.svg";

function Error() {
  return (
    <div className="error-page text-center">
      <h1>Oups!!! </h1>
      <p>Il semblerait qu’il y ait un problème</p>
      <img src={errorImage} alt="Error page image" className="mx-auto my-5" />
    </div>
  );
}

export default Error;
