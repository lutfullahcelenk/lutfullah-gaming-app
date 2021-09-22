import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { gameContext } from "../context/gameContext";

const MainPage = () => {
  const games = useContext(gameContext);

  return (
    <div>
      <h1 className="text-center">
        <strong>Vote </strong>for <strong>the Best Tournament</strong>
      </h1>
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-primary btn-lg">
          <i className="fas fa-plus me-2"></i>Add Nominee
        </button>
      </div>
      <div className="main-container row w-75 m-auto">
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;