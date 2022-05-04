import React, {useState, useEffect} from 'react';
import 'animate.css';


const IndividualCharacterbio = (props) => {
  console.log('IndividualCharacterbio', props)
  // console.log('props.character.character.name', props.character.character.name)
  // useEffect(() => {
  //   if (props.show === false) {
  //   return null
  //   }
  // },[props.show]);
  return (
    <div>
      <div id='IndividualCharacterbio' class="animate__animated animate__backInLeft">
        <div>{props.character.character.name}</div>
        <div className='characterCard'>
          <div>
            <div>Alignment :{props.character.character.biography.alignment}</div>
            <div>Alias? :{props.character.character.biography.aliases}</div>
            <div>Home Base :{props.character.character.work.base}</div>
            <div>Occupation :{props.character.character.work.occupation}</div>
            <div>Affiliation :{props.character.character.connections['group-affiliation']}</div>
          </div>
          <br/>
          <div className='power'>
            <div>POWER/STATS</div>
            <div>Combat :{props.character.character.powerstats.combat}</div>
            <div>Durability :{props.character.character.powerstats.durability}</div>
            <div>Intelligence :{props.character.character.powerstats.intelligence}</div>
            <div>Power :{props.character.character.powerstats.power}</div>
            <div>Speed :{props.character.character.powerstats.speed}</div>
            <div></div>Strength :{props.character.character.powerstats.strength}</div>
          </div>
          {/* <div class="animate__animated animate__rollOut"> */}
            <button onClick={()=>props.setShow(false)}>Back</button>
          {/* </div> */}
        </div>
      </div>

  )
}
export default IndividualCharacterbio;