import React from 'react';
import BorderCard from '../../common/BorderCard';



const Tracker = (props) => {
  const {name,signature, id} = props.tracker
 
  return (
    <BorderCard style={{
      backgroundColor: "#04b5e5",
      color: '#000',
      textShadow: '2px 2px 8px #FFF',
      flexDirection: 'column'
      }}
      onClick={() => props.onSelect(id)}>
      <h1>{name}</h1>
      <h4>Signature:&emsp;{signature}</h4>  
    </BorderCard>
  )
}

export default Tracker;