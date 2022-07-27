import React, {useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import Spinner from '../faCommon/Spinner';
import Button from '../common/Button';
import {faUserPlus, faUserSlash, faUserInjured, faUserClock, faPeopleArrows} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Profile = (props) => {
  const params = useParams();
  const [tracker, setTracker] = useState({
    id: params.trackerId
  });
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  // const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
  // pull Tracker data from backend
  useEffect(() => {
    const _getTracker = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/trackers/${tracker.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
      setTracker(res.data);
      setLoading(false);
    }
    setLoading(true);
    _getTracker();
  }, [])

  console.log(auth);

  const displayProfile = () => {
    return (
      <Fragment>
          <div style={{
            flex: 2,
            flexDirection: 'column',
            color: '#F1F1F1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <h1>{tracker.name.toUpperCase()}</h1>
          </div>
      </Fragment>
    )
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      {loading ? (
        <Spinner /> 
      ) : 
        displayProfile()
      }
    </div>
  )
}

export default Profile;