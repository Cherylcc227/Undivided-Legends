import React, {useState, useContext} from 'react'
import { AppContext } from "../context.js";
import axios from 'axios';

const AddPlayer = () => {
  const {characterList, setCharacterList, addDCMR, setAddDCMR} = useContext(AppContext);
  const [name, setName] = useState('');

  const handleInputName = (e) => {
    e.preventDefault();
    setName(e.target.value)
    // console.log('e.target.value', e.target.value)
  }



  const addMarvelorDC = ((e) => {
    e.preventDefault();
    // console.log("name", name)
    axios.post('/marvelORdc', {name})
    .then((data)=> {
      setAddDCMR(data.data.results)
    })
    .catch((err)=> {
      console.log(err)
    })
  });


  // console.log('ADDDCMR', addDCMR)
  console.log('setAddDCMR', addDCMR)
  return (
    <div>
      <div>
        <form>
        <label>
        <input type='text'
        value={name}
        onChange={(e)=>handleInputName(e)}/>
         </label>
        <button onClick={(e)=>addMarvelorDC(e)}>ADD MARVEL/DC PLAYER INFO</button>
        </form>
      </div>
    </div>
  )
}

export default AddPlayer;
