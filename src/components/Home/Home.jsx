import React from 'react';
import background from '../../assets/images/cryptocurrency-background.jpg';


const Home = () => {

  console.log("Home - activated!!")
  const styles = {
    header: {
      backgroundImage: `url(${background})`,
      // height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      position: 'relative'
    },
  
    content: {
      // height: '100%',
      // width: '100%',
      // backgroundColor: 'rgba(50, 50, 50, .75)',
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
    <div style={styles.header}>
      <div style={styles.content}>
        <font size="7">
          <center><b>Cryptocurrency Tracker</b></center>
        </font>
          {/* <button type="button" onClick={handleClick}>Default</button> */}
      </div>
    </div>
    
  )
}

export default Home;