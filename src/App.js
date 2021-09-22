import React,{useState} from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import InitialState from "./store/InitialState";
import {gameContext} from "./context/gameContext";
import Pagination from './components/Pagination';


const App = () => {

  const[games,setGames] = useState(InitialState);
  const [currentPage,setCurrentPage] = useState(1);
  const[postsPerPage,setPostsPerPage] = useState(6);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = games.slice(indexOfFirstPost,indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <gameContext.Provider value={currentPosts}>
    
      <Header/>
      <MainPage/>
      <Pagination postsPerPage={postsPerPage} totalPosts={games.length} paginate={paginate}/>
    
    </gameContext.Provider>
  )
}
export default App