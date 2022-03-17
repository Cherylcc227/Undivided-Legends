import React, {useState, useContext} from 'react'
import { AppContext } from "../context.js";
import axios from 'axios';
import SearchCharacters from './SearchCharacters.jsx'

const MainScreen = (props) => {
  const {addDCMR} = useContext(AppContext);
  // console.log('PERSONALITY', dcmr)
  return (
    <div>
      <div className="mainScreen">
        {addDCMR.map((character, i)=> {
        return <SearchCharacters character={character} key={i}/>
        })};
      </div>
    </div>
  )
}

export default MainScreen;