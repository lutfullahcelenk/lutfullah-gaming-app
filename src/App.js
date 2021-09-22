import React, { useState } from "react";
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
  console.log(currentPosts)

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <gameContext.Provider
        value={ currentPosts, paginate, postsPerPage, games }
      >
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/homepage" component={Homepage} /> */}
          <Route path="/addpage" component={AddPage} />
        </Switch>
      </gameContext.Provider>
    </Router>
  );
};
export default App;
