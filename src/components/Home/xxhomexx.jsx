import React from 'react';
import background from '../../assets/images/cryptocurrency_matrix.jpg';



const Home = () => {
  console.log("Home - activated!!")



  const styles = {
    header: {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      position: 'relative'
    },
  
    content: {
      color: '#f0f0f0',
      width:'300px',
      height:'200px',
      position:'absolute',
      left:'50%',
      top:'40%',
      margin: '-100px 0 0 -150px',
      textShadow: '5px 5px  #000',
    }
  }

  return (
    <div>
      <div>
     {/* <div style={styles.header}>
      <div style={styles.content}> */}
        <font size="7">
          <center><b>Cryptocurrency Tracker</b></center>
        </font>
      </div>
    </div>
    
  )
}

export default Home;