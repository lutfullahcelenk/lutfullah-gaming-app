import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { gameContext } from "../context/gameContext";
import { useHistory } from "react-router";


const MainPage = () => {

  const {currentPosts} = useContext(gameContext);
  const history = useHistory();

  const goAddNominee = () => {
    history.push({pathname: "/addpage"})
  }

  return (
    <div>
      <h1 className="text-center">
        <strong>Vote </strong>for <strong>the Best Tournament</strong>
      </h1>

      <div className="d-flex justify-content-evenly">

        <button className="btn btn-primary btn-lg" onClick={goAddNominee}>
          <i className="fas fa-plus me-2"></i>Add Nominee
        </button>

        <div className="dropdown">
          <button
            className="btn btn-secondary btn-lg"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-sort me-2"></i>Sort By
          </button>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item btn h5" href="#">
              Most Points
            </button>
            <button className="dropdown-item btn h5" href="#">
              Less Points
            </button>
          </div>
          
        </div>
      </div>
      <div className="main-container row w-75 m-auto">
        {currentPosts.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
