import React, {useContext, useEffect, useState}from "react";
import CurrenciesDaily from "../Cryptocurrencies/CurrenciesDaily";
import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import CurrencyHeader from "./CurrencyHeader";
import { useLocation } from "react-router-dom";
import  Container  from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";
import {AuthContext} from '../Providers/AuthProvider';



const CurrencyProfile=(props)=>{
    const location=useLocation();
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===location.state.symbol);
    const [tracker, setTracker] = useState([]);
    const [auth] = useContext(AuthContext);

    useEffect(() => {
        const _getTrackers = async () => {
          try {
    
            const res = await axios.get(
              `${apiHostUrl}/api/trackers/self`,
              {
                headers: {
                  "Authorization": `Bearer ${auth.token}`
                }
              }
            )
            console.log(">>--> Tracker: "+res.data.id);
            setTracker(res.data);
            } catch (err) {
            console.log(err)
          }
        }
        _getTrackers();
      },[])
// axios call back to get self then i can get id
    console.log(">>--> CP: tId: "+tracker.id);

    
 
    // if currency not found return 404
    return (
        
        <div>
            <CurrencyHeader crypto={currency} user={tracker}/>
            <CurrenciesDaily crypto={currency} user={tracker}/>
        </div>
    
    )
}

export default CurrencyProfile;