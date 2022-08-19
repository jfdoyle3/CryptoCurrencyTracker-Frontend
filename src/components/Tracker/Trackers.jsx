import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Tracker from './models/Tracker';
import { apiHostUrl } from '../../config';
import background from '../../assets/images/cryptonet.jpg';



const Trackers = (props) => {
  const [auth] = useContext(AuthContext);
  const [trackers, setTrackers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

   useEffect(() => {
    const _getTrackers = async () => {
      try {

        const res = await axios.get(
          `${apiHostUrl}/api/trackers`,
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
        console.log("Trackers: "+res.data)
        setLoading(false);
        setTrackers(res.data);
        _getCurrencies();
      } catch (err) {
        console.log(err)
      }
    }
    setLoading(true);
    _getTrackers();
  },[auth.token])

  const _getCurrencies= async ()=>{
    try{
        const res = await axios.get(
          `${apiHostUrl}/api/currency/`,
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
    } catch (err){
      console.log(err)
    }
}

  const displayTrackers = () => {
    return trackers.map(track => <Tracker tracker={track} key={track.id} onSelect={onSelect}/>)
  }

  const onSelect = (trackId) => {
    navigate(`/trackers/${trackId}`)
  }

  const styles = {
    header: {
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
     
    },
  
    content: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
      // backgroundColor: 'rgba(100, 100, 100, .50)', 
      color: "#f0f0f0",
      // textShadow: '2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
          
    }
  }
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <h1>Trackers</h1>
        {loading ? 
          <Spinner /> 
        :
          displayTrackers()
        }
      </div>
    </div>
  )
}

export default Trackers;