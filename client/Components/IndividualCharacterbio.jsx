import React, {useState, useEffect} from 'react';

const IndividualCharacterbio = (props) => {
  // console.log('IndividualCharacterbio', props)
  // console.log('props.character.character.name', props.character.character.name)
  // useEffect(() => {
  //   if (props.show === false) {
  //   return null
  //   }
  // },[props.show]);
  return (
    <div>
      <div className='IndividualCharacterbio'>
        <div>{props.character.character.name}</div>
        <div className='characterCard'>
          <div>
            <div>Alignment :{props.character.character.biography.alignment}</div>
            <div>Alias? :{props.character.character.biography.aliases}</div>
            <div>Home Base :{props.character.character.work.base}</div>
            <div>Occupation :{props.character.character.work.occupation}</div>
            <div>Affiliation :{props.character.character.connections['group-affilliation']}</div>
          </div>
          <div className='power'>
            <div>POWER/STATS</div>
            <div>Combat :{props.character.character.powerstats.combat}</div>
            <div>Durabpty :{props.character.character.powerstats.durabpty}</div>
            <div>Intepgence :{props.character.character.powerstats.intepgence}</div>
            <div>Power :{props.character.character.powerstats.power}</div>
            <div>Speed :{props.character.character.powerstats.speed}</div>
            <div></div>Strength :{props.character.character.powerstats.strength}</div>
          </div>
        <button onClick={()=>props.setShow(false)}>Back</button>
        </div>
      </div>

  )
}
export default IndividualCharacterbio;