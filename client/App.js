import React from 'react'
import { useState} from 'react'
import AddPlayer from './Components/AddPlayer.jsx'
import CreatePlayer from './Components/CreatePlayer.jsx'
import PlayerList from './Components/PlayerList.jsx'

const App = () => {
  return (
    <div>
      <h1>Landing Legendary </h1>
      <div className="navBar">
        <p>USER PLACEHOLDER</p>
        <AddPlayer/>
        <CreatePlayer/>
      </div>
        <PlayerList/>
    </div>
  )
}


export default App
