import React,{useState} from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { gameContext } from "../context/gameContext";

const AddPage = () => {

  const history = useHistory();

  const {addNomineeGame} = useContext(gameContext);

  const [name,setName] = useState("");
  const [winner,setWinner] = useState("");
  const [image,setImage] = useState("");

   // ARRANGING DATE

   const date = new Date();
   const year = date.getFullYear();
   const month = date.getMonth();
   const day = date.getDay();
   const hour = date.getHours();
   const min = date.getMinutes();
   const voteDate = day + "." + month + "." + year + " " + hour + ":" + min;

  const goHome = () => {
    history.push({ pathname: "/" });
  };

  const handleSubmit = (e) => {
      if(!name || !winner || !image) {
          e.preventDefault();
          alert("Fill the all blanks...")
      }else{
          e.preventDefault();
          addNomineeGame({name,winner,image, point:0, lastVoteDate: voteDate});
          setName("");
          setWinner("");
          setImage("");
      }
  }

  

  return (
    <div className="addpage">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputTournament">
            Tournament Name:
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleInputTournament"
            value={name}
            placeholder="Enter a Tournamenat Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputWinner">
            Winner Team:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputWinner"
            value={winner}
            placeholder="Enter the Winner Team"
            onChange={(e) => setWinner(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label htmlFor="exampleInputImage">
            Cover Image URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputImage"
            value={image}
            placeholder="Enter Image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-warning">
            Add Nominee
          </button>
        </div>
      </form>

      <button type="submit" className="btn btn-primary mt-5" onClick={goHome}>
        Go back to Home
      </button>
    </div>
  );
};

export default AddPage;
