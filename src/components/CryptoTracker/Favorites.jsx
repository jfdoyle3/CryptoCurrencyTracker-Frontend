import React,{useState, useEffect} from "react";
import axios from "axios";
import { apiHostUrl } from "../../config";

import Favorite from "./models/Favorite";


const Favorites=()=>{

  const[favorites,setFavorites]=useState([]);
  const [loading, setLoading]=useState(true); 
  const [auth, authContext]=

  useEffect(()=> {
    console.log("Favorites - use Effect Acitvated!!!");
    const _getFavorites=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/tracker/self`);
        console.log(res.data.favorites);
        setLoading(false);
        setFavorites(res.data.favorites);
      }catch(err){
        console.error(err.message);
      }

    }
    setLoading(true)
    _getFavorites();
  },[])

  return(
    <div>
      <h1>Favorties</h1>
      <Favorite />
    </div>
  )
}

export default Favorites;