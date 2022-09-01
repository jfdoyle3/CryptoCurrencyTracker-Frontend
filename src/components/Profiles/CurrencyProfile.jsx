import React, {useContext, useEffect, useState}from "react";
import CurrenciesDaily from "../Cryptocurrencies/CurrenciesDaily";
import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import CurrencyHeader from "./CurrencyHeader";
import { useLocation } from "react-router-dom";
// import  Container  from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";
import {AuthContext} from '../Providers/AuthProvider';
import { TrackerContext } from "../Providers/TrackerProvider";



const CurrencyProfile=(props)=>{
    const location=useLocation();
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===location.state.symbol);
  //  const [trackerState, setTrackerState] = useState([]);
    const [auth] = useContext(AuthContext);
    const [tracker]=useContext(TrackerContext);

    // add loading here ...
    console.log(">>==> CP: TrackerPro: "+tracker.id);
    // Tracker Provider
    // useEffect(() => {
    //     const _getTrackers = async () => {
    //       try {
    
    //         const res = await axios.get(
    //           `${apiHostUrl}/api/trackers/self`,
    //           {
    //             headers: {
    //               "Authorization": `Bearer ${auth.token}`
    //             }
    //           }
    //         )
    //         console.log(">>--> Tracker: "+res.data.id);
    //         setTracker(res.data);
    //         } catch (err) {
    //         console.log(err)
    //       }
    //     }
    //     _getTrackers();
    //   },[])
// axios call back to get self then i can get id
    

    
 
    // if currency not found return 404
    return (
        
        <div>
            <CurrencyHeader crypto={currency} user={tracker}/>
      
          <div style={{
                      display: "flex",
                      flex: "1",
                      flexDirection: "row"
          }}>
              <CurrenciesDaily crypto={currency} user={tracker}/>
            </div>
            <div style={{
                      display: "flex",
                      flex: "1",
                      flexDirection: "row"
          }}>
              <h1>Message Board</h1>
            </div>

      </div>
     
    
    )
}

export default CurrencyProfile;