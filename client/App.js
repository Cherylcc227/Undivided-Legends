import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import AddPlayer from './Components/AddPlayer.jsx';
import CreatePlayer from './Components/CreatePlayer.jsx';
import PlayerList from './Components/PlayerList.jsx';
import MainScreen from './Components/MainScreen.jsx';
import SpecialEdition from './Components/SpecialEdition.jsx';
import { AppContext } from "./context.js";

const AppProvider = (props) => {
  const [characterList, setCharacterList] = useState([]);
  const [addDCMR, setAddDCMR] = useState([])


  return (
    <AppContext.Provider value= {{
      characterList, setCharacterList,
      addDCMR, setAddDCMR
      }}>
      {props.children}
    </AppContext.Provider>
  )
}



const App = () => {
  const [characterList, setCharacterList] = useState([]);

  return (
    <AppProvider>
      <h1 id="pageHeading">Undivided Legends </h1>
      <div className="navBar">
        <p>USER PLACEHOLDER</p>
        {/* <AddPlayer characterList={characterList} setCharacterList={setCharacterList}/> */}
        <AddPlayer/>
        <AppProvider/>
        <CreatePlayer/>
      </div>
      <div className="mainLevel">
      <SpecialEdition/>
      <MainScreen/>
      {/* <PlayerList/> */}
      </div>
    </AppProvider>
  )
}


export default App
