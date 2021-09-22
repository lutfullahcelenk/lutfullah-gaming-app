import React from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Pagination from "../components/Pagination";
import { gameContext } from "../context/gameContext";
import { useContext } from "react";

const Homepage = () => {

    const games = useContext(gameContext);
    const postsPerPage = useContext(gameContext);
    const paginate = useContext(gameContext);

  return (
    <div>
      <Header />
      <MainPage />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={games.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Homepage;
