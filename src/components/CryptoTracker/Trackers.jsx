import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Tracker from './Tracker';

const Trackers = (props) => {
  const [auth] = useContext(AuthContext)
  const [trackers, setTrackers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // use effect to pull list of Trackers
  // use state to store the Trackers
  // neet bearer token to get the Tracker list.

  useEffect(() => {
    const _getTrackers = async () => {
      try {

        const res = await axios.get(
          'http://localhost:8080/api/trackers',
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
        console.log(res.data)
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

  const onSelect = (trackerId) => {
    navigate(`/trackers/${trackerId}`)
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