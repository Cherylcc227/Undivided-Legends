import React from 'react';
import UploadPhoto from './UploadPhoto.jsx'

const ModalCreateNewPlayer = (props)=> {
  console.log(props)
  if (props.newPlayer === false) {
    return null
  }
  return (
    <div className='ModalCreateNewPlayer'>
      <form>
        <label>
          Alias
          <input type='text' placeholder='Hero/Villian Name'/>
        </label>
        <br/>
        <label>
          Name
          <input type='text' placeholder='Government Name'/>
        </label>
        <br/>
        <label>
          Image
          <UploadPhoto/>
        </label>
        <br/>
        <label>
          Ability
          <br/>
          Combat
          <input input type='text'/>
          <br/>
          Durability
          <input input type='text'/>
          <br/>
          Power
          <input input type='text'/>
          <br/>
          Speed
          <input input type='text'/>
          <br/>
          Strength
          <input input type='text'/>
        </label>
        <br/>
        <button onClick={()=>props.setNewPlayer(false)}>CREATE CHARACTER</button>
      </form>
    </div>
  )
}

export default ModalCreateNewPlayer;