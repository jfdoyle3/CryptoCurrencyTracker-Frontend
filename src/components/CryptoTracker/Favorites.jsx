import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { apiHostUrl } from "../../config";
import Favorite from "./models/Favorite";
import {AuthContext} from '../Providers/AuthProvider';

const Favorites=()=>{

 
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  
  
  useEffect(() => {
    const _fetchTracker = async () => {
      const res = await axios.get(
        `${apiHostUrl}/api/trackers/self`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data.favorites);
       setFavorites(res.data.favorties);
      setLoading(false);
    }
    setLoading(true);
    _fetchTracker();
  }, [])

  return(
    <div>
      <h1>Favorties</h1>
      <Favorite />
    </div>
  )
}

export default Favorites;