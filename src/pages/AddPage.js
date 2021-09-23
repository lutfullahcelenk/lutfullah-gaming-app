import React from "react";
import { useHistory } from "react-router";

const AddPage = () => {
  const history = useHistory();

  const goHome = () => {
    history.push({ pathname: "/" });
  };

  return (
    <div className="addpage">
      <form className="form">
        <div class="form-group">
          <label for="exampleInputTournament" htmlFor="exampleInputTournament">
            Tournament Name:
          </label>

          <input
            type="text"
            class="form-control"
            id="exampleInputTournament"
            placeholder="Enter a Tournamenat Name"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputWinner" htmlFor="exampleInputWinner">
            Winner Team:
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputWinner"
            placeholder="Enter the Winner Team"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputImage" htmlFor="exampleInputImage">
            Cover Image URL:
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputImage"
            placeholder="Enter Image URL"
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" class="btn btn-warning">
            Add Nominee
          </button>
        </div>
      </form>

      <button type="submit" class="btn btn-primary mt-5" onClick={goHome}>
        Go back to Home
      </button>
    </div>
  );
};

export default AddPage;
