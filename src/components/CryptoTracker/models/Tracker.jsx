import React from 'react';
import BorderCard from '../../common/BorderCard';



const Tracker = (props) => {
  const {name, id} = props.tracker
 
  return (
    <BorderCard style={{backgroundColor: "#04b5e5",}}onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
      
    </BorderCard>
  )
}

export default Tracker;