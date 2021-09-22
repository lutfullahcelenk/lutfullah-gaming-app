import React,{useState} from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import InitialState from "./store/InitialState"
import {gameContext} from "./context/gameContext"


const App = () => {
  const[games,setGames] = useState(InitialState)


  return (
    <gameContext.Provider value={games}>
    <div>
      <Header/>
      <MainPage/>
    </div>
    </gameContext.Provider>
  )
}

export default App