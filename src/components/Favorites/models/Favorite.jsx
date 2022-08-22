import React,{useEffect, useContext} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { apiHostUrl } from "../../../config";
import {AuthContext} from "../../Providers/AuthProvider";



const Favorite = (props) => {

 const {name,ranking,logoUrl,symbol}=props.favorites
 const [auth, setAuth] = useContext(AuthContext);


  const _deleteFavorite= async()=>{
    const res = await axios.delete(
      `${apiHostUrl}/api/trackers/removeFavorite/${symbol}`,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      }
    )
    props.onDelete(ranking);
  }

  return (
         <tr key={ranking}>
          <td>
          <img src={logoUrl} width={25} height={25}  alt={name} />
          </td>
          <td>{ranking}</td>
          <td>{symbol}</td>
          <td><Link to="/currencyProfile" state={ {symbol:`${symbol}`}}>{name}</Link></td>
          <td>
            <button
              type="button" onClick={_deleteFavorite}>
              Delete
            </button>
          </td>
        </tr>
  )
}

export default Favorite;