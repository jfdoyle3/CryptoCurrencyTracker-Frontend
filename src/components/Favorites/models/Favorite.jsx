import React,{useEffect, useContext} from "react";
import axios from "axios";
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
    <table>
      <tr>
        <th></th>
        <th>Rank</th>
        <th>Symbol</th>
        <th>Name</th>
      </tr>
        <tr key={ranking}>
          <td>
          <img src={logoUrl} width={25} height={25}  alt={name} />
          </td>
          <td>{ranking}</td>
          <td>{symbol}</td>
          <td>{name}</td>
          <td>
            <button
              type="button" onClick={_deleteFavorite}>
              Delete
            </button>
          </td>
        </tr>
    </table>
  )
}

export default Favorite;