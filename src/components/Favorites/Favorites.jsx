import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import { apiHostUrl } from "../../config";
import Favorite from "./models/Favorite";
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import BorderCard from '../common/BorderCard'
import "../../styling/Table.css";


const Favorites=()=>{

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  

  const handleDelete=(key)=>{
   setFavorites(favorites.filter(fav => fav.ranking !== key))
  }
  
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
    return favorites.map(fave => <Favorite favorites={fave} key={fave.ranking} onDelete={handleDelete} />)
  }

  return(
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      
      <BorderCard style={{
        alignItems: 'center',
        alignContent: 'center'
      }}>
      <h1>Favorites</h1>
      <table>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
            {loading ? 
        <Spinner /> 
      :
        displayFavorites()
      }
      </table>
      </BorderCard>
    </div>
  )
}

export default Favorites;