import axios from 'axios';
import React, {useContext, useState} from 'react';
import { apiHostUrl } from '../../../config';
import "../../../styling/CurrencyTable.css";
import { AuthContext } from "../../Providers/AuthProvider";


const Currency = (props) => {

    const{name,ranking,logoUrl,symbol}=props.currencyInfo
    const[auth]=useContext(AuthContext);
    const [favorite] = useState({
      currency: symbol,
    });

    const addFavorite=async()=>{
      try{
        const res=await axios.post(`${apiHostUrl}/api/trackers/addFavorite/`,favorite,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        alert('Added favorite');
      } catch (err){
        alert(err.response.data.message);
      }
    };

  return (
          <tr key={ranking}>
            <td>
            <img src={logoUrl} width={25} height={25}  alt={name} />
            </td>
            <td>{ranking}</td>
            <td>{symbol}</td>
            <td>{name}</td>
            <td>
              <button onClick={addFavorite}>Add Favorite</button>
            </td>
          </tr>
  )
}

export default Currency;