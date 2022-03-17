import React, {useState} from 'react';
import IndividualCharacterbio from './IndividualCharacterbio.jsx'

const SearchCharacters = (props) => {
  console.log('SearchCharacters', props)
  const [show, setShow] = useState(false);

  // if (!props.show) {
  //   return null
  // }

  return (
      <div>
        <div id="charSearch">{props.character.name} ({props.character.biography.publisher})</div>
          <div className='charCard'>
            <div>
             <img id="charImg" src={props.character.image.url}/>
            </div>
            <div>
              <li>Name: {props.character.biography['full-name']}</li>
              <button onClick={()=>setShow(true)}>Character Deets</button>
            </div>
          </div>
      {show&&<IndividualCharacterbio character={props} show={show} setShow={setShow}/>}
      </div>
  )
}

export default SearchCharacters;