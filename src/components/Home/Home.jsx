import React from 'react';
import background from '../../assets/images/cryptocurrency_matrix.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../common/Button';



const Home = () => {
  let clicked=false;
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

  const removeFriend = async () => {
    alert('but why');
  }

  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <font size="7">
          <center><b>Cryptocurrency Tracker</b></center>
        </font>
        {clicked ?(
        <Button 
            style={{
              width: 'auto',
              color: '#F1F1F1',
            }}
            onClick={removeFriend}
          >
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/>        
        </Button>)
          :
         (<Button 
          style={{
            width: 'auto',
            color: '#F0F0F0',

          }}
          onClick={removeFriend}
        >
        <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/>        
      </Button>
          )}

      </div>
    </div>
    
  )
}

export default Home;