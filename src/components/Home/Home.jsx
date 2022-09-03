import React from 'react';
import background from '../../assets/images/cryptocurrency_matrix.jpg';
import Container from '../common/Container';
import Splash from '../common/Splash';




const Home = () => {
  console.log("Home - activated!!")
  return (
    <Container>
      <Splash
        image = {background}
        style={{
            position: 'absolute',
            color: '#F1F1F1',
            top: '75px' 
        }}
      >
      <font size="6">
        <h1
          style={{
            textShadow: '1px, 1px, red'
          }}
        >
          <b>Cryptocurrency</b>
   
        </h1>
        <h1
          style={{
           textShadow: '1px, 1px, red'
          }}
          >
          <center><b>Tracker</b></center>  
            </h1>
      </font>
      </Splash>
    </Container>
  )
}

export default Home;