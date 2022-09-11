import React, {useContext, useEffect, useState}from "react";
import CurrenciesDaily from "../Cryptocurrencies/CurrenciesDaily";
import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import CurrencyHeader from "./CurrencyHeader";
import { useLocation } from "react-router-dom";
import  Container  from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";
import {AuthContext} from '../Providers/AuthProvider';
import { TrackerContext } from "../Providers/TrackerProvider";
import Select from "../common/Select";



const CurrencyProfile=(props)=>{
    const location=useLocation();
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===location.state.symbol);
  //  const [trackerState, setTrackerState] = useState([]);
    const [auth] = useContext(AuthContext);
    const [tracker]=useContext(TrackerContext);

    // add loading here ...
    console.log(">>==> CP: TrackerProvider: "+tracker.id);
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
const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

    
 
    // if currency not found return 404
    return (
        
      <Container>
        <div style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    float: 'right',
                    justifyContent:'flex-end',
                    flexWrap: 'wrap',
                    gap: '20px',
                    width: '100%'
        }}>
          <CurrencyHeader crypto={currency} user={tracker}/>
        </div>
        <div style={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    float: 'right',
                    justifyContent:'flex-end',
                    flexWrap: 'wrap',
                    gap: '20px',
                    width: '100%'
          }}>
            <div style={{
                    flexDirection: 'column',
                    flex: '2',
          }}>
              <Select>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </Select>
              <CurrenciesDaily crypto={currency} user={tracker}/>
        </div>
        <div style={{
                    flexDirection: 'column',
                    flex: '1',
                    backgroundColor: '#F0F0F0'
        }}>
          <h1>Message Board</h1>
        </div>
        </div>
     </Container>
    
    )
}

export default CurrencyProfile;




