import React from "react";
import Card from "../../components/Card/card";
import Spinner from "../../components/Spiner/spiner";
import useFetch from "../../Hooks/fetchedDatas";

function Freelances() {
  const { data, isLoading } = useFetch(`http://localhost:8000/freelances`);
  console.log(data);
  return (
    <>
      <h2 className="text-center mb-5">Trouvez votre prestataire</h2>
      <p className="text-center mb-5">
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </p>
      <div className="col-8 mx-auto">
        <div className="row">
          {isLoading ? (
            <div className="col-2 mx-auto p-5">
              <Spinner />
            </div>
          ) : data ? (
            data.freelancersList.map((profile) => {
              return (
                <Card
                  key={profile.id}
                  name={profile.name}
                  job={profile.job}
                  picture={profile.picture}
                />
              );
            })
          ) : (
            <span>Pas de resultats</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Freelances;
