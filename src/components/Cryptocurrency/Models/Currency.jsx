import axios from 'axios';
import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { apiHostUrl } from '../../../config';
import "../../../styling/Table.css";
import { AuthContext } from "../../Providers/AuthProvider";
import AdvButton from '../../common/AdvButton';
import Button from '../../common/AdvButton';


const Currency = (props) => {

    const{name,ranking,logoUrl,symbol}=props.currencyInfo
    const[auth]=useContext(AuthContext);
    const navigate = useNavigate();
    
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
        alert(`Added: ${name}`);
      } catch (err){
        alert(err.response.data.message);
      }
    };

    const navCurrencyProfile=()=>{
      navigate(`/currencyProfile`,{state: {symbol:`${symbol}`}});
    }
    


  return (
          <tr key={ranking}>
            <td>
              <img src={logoUrl} width={25} height={25}  alt={name} />
            </td>
            <td>{ranking}</td>
            <td>{symbol}</td>
            <td>{name}</td>
            <td>
              <AdvButton style={{backgroundColor: "#04b5e5"}} onClick={addFavorite}>Favorite</AdvButton>
              <AdvButton onClick={navCurrencyProfile}>View</AdvButton>
            </td>
          </tr>
  )
}

export default Currency;