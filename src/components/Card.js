import React from "react";

const Card = ({game}) => {
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
        <p className="card-text h5">
          {game.winner}
        </p>
        <p className="card-text h5">
          {game.votedate}
        </p>
        <div className="btn-group ms-4 mt-3">
        <button href="#" className="btn btn-outline-primary ">
         <i className="fas fa-chevron-down"></i> Down
        </button>
        <button href="#" className="btn btn-primary ">
        <i className="fas fa-chevron-up"></i> Up
        </button>
        </div>
        <button href="#" className=" btn btn-danger delete-btn ms-5 mt-3">
        <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default Card; 