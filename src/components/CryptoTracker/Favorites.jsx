import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { apiHostUrl } from "../../config";
import Favorite from "./models/Favorite";
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';


const Favorites=()=>{

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  
  
  useEffect(() => {
    const _fetchFavorites = async () => {
      const res = await axios.get(
        `${apiHostUrl}/api/trackers/self`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data.favorites);
      setFavorites(res.data.favorites);
      setLoading(false);
    }
    setLoading(true);
    _fetchFavorites();
  }, [])

  const displayFavorites = () => {
    return favorites.map(money => <Favorite favorites={money} key={money.ranking} />)
  }

  return(
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Favorites</h1>
      {loading ? 
        <Spinner /> 
      :
        displayFavorites()
      }
    </div>
  )
}

export default Favorites;