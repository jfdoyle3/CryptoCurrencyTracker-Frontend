import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Tracker from './models/Tracker';
import { apiHostUrl } from '../../config';


const Trackers = (props) => {
  const [auth] = useContext(AuthContext)
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
      } catch (err) {
        console.log(err)
      }


    }
    setLoading(true);
    _getTrackers();
  },[auth.token])

  const displayTrackers = () => {
    return trackers.map(track => <Tracker tracker={track} key={track.id} onSelect={onSelect}/>)
  }

  const onSelect = (trackId) => {
    navigate(`/trackers/${trackId}`)
  }


  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Trackers</h1>
      {loading ? 
        <Spinner /> 
      :
        displayTrackers()
      }
    </div>
  )
}

export default Trackers;