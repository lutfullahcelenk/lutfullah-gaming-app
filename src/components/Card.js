import React from "react";
import { useContext } from "react";
import { gameContext } from "../context/gameContext";

const Card = ({ game }) => {
  const { deleteGame } = useContext(gameContext);
  const { upPoint } = useContext(gameContext);
  const { downPoint } = useContext(gameContext);

  return (
    <div className="card col-md-4 mt-5 bg-light" key={game.id}>
      <img className="card-img-top" src={game.image} alt="game image" />
      <div className="card-img-overlay ">
        <div className="w-25 d-flex flex-column align-items-center bg-primary text-dark">
          <h1>{game.point}</h1>
          <h3>Points</h3>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{game.name}</h3>

        <p className="card-text h5">{game.winner}</p>

        <div className="btn-group ms-4 mt-3" >
          <button href="#" className="btn btn-outline-primary" onClick={() => downPoint(game.id,game.point)}>
            <i className="fas fa-chevron-down"></i> Down
          </button>

          <button href="#" className="btn btn-primary" onClick={() => upPoint(game.id,game.point)}>
            <i className="fas fa-chevron-up"></i> Up
          </button>
        </div>

        <div className="btn-group" onClick={() => deleteGame(game.id, game.name)}>
          <button href="#" className=" btn btn-danger delete-btn ms-5 mt-3">
            <i className="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
