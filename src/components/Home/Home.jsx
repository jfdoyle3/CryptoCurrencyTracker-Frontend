import React from 'react';
import background from '../../Assets/images/cryptocurrency-background.jpg';


const Home = () => {
  console.log("Home - activated!!")
  const styles = {
    header: {
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(50, 50, 50, .75)',
      color: "#f0f0f0"
      
    }
  }


  return (
    <div style={styles.header}>
      <div style={styles.content}>
      <h2>Home</h2>
      </div>
    </div>
    
  )
}

export default Home;