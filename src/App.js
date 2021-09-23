import React, { useState, useEffect } from "react";
import InitialState from "./store/InitialState";
import { gameContext } from "./context/gameContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddPage from "./pages/AddPage";

const App = () => {
  const [games, setGames] = useState(InitialState);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Add Game
  const addNomineeGame = (game) => {
    const id = Date.now();
    const newGame = { ...game, id };
    setGames((prevState) => [...prevState, newGame]);
  };

  // Delete Game
  const deleteGame = (id, gname) => {
    let result = window.confirm(`Are you want to delete ${gname}?`);
    if (result) {
      setGames(games.filter((game) => id !== game.id));
    } else {
      return;
    }
  };

  //Increase Game Point
  const upPoint = (id, point) => {
    point++;
    setGames(
      games.map((game) => game.id === id ? { ...game, point } : { ...game })
    );
  };

  //Decrease Game Point
  const downPoint = (id, point) => {
    point--;
    setGames(
      games.map((game) => game.id === id ? { ...game, point } : { ...game })
    );
  };

  //LocalStorage

  useEffect(() => {
    const data = localStorage.getItem("game-list");
    if(data) {
      setGames(JSON.parse(data))
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("game-list", JSON.stringify(games))
  });

  return (
    <Router>
      <gameContext.Provider
        value={{
          currentPosts,
          paginate,
          postsPerPage,
          games,
          addNomineeGame,
          deleteGame,
          upPoint,
          downPoint,
        }}
      >
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/addpage" component={AddPage} />
        </Switch>
      </gameContext.Provider>
    </Router>
  );
};
export default App;
