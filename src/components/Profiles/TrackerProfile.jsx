import React, {useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import image from '../../assets/images/cryptonet.jpg';
import Container from '../common/Container';


const Profile = (props) => {
  const params = useParams();
  const [tracker, setTracker] = useState({
    id: params.trackId
  });
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  const navigate=useNavigate();
  
  useEffect(() => {
    const _fetchTracker = async () => {
      const res = await axios.get(
        `${apiHostUrl}/api/trackers/${tracker.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      setTracker(res.data);
      setLoading(false);
    }
    setLoading(true);
    _fetchTracker();
  }, [])

  const update=()=>{
      navigate(`/update`)
    }

  const displayProfile = () => {
  return (
      <Fragment>
          <div id="columnComponentsNBk">
            <h1 style={{alignItems: "center"}}>Tracker:</h1>
            <h1>Name:&emsp;{tracker.name.toUpperCase()}</h1>
            <h2>Signature:&emsp;{tracker.signature}</h2>
            <Button style={{backgroundColor: "#04b5e5"}} onClick={update}>Edit</Button>
            <Favorites />
          </div>
      </Fragment>
    )
  }

  return (
    <Container>
    <div id="columnComponentsNBk">
      {loading ? (
        <Spinner /> 
      ) : 
        displayProfile()
      }
    </div>
    </Container>
  )
}

export default Profile;