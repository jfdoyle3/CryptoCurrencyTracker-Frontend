import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
// import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';

const TrackerContext = React.createContext([]);

const TrackerProvider = (props) => {
  
  const [tracker, setTracker] = useState({data:[{id: null, name: null, signature: null}]});
  const [auth, setAuth]=useContext(AuthContext);

  const _getAllTracker= async()=>{
    if(!auth.token){
      return;
    }
    
    try{
      const res=await axios.get(`${apiHostUrl}/api/trackers/self`,
      {
        headers:{
          Authorization: `Bearer ${auth.token}`
        }
      });

      console.log(res.data);
     // setLoading(false);
      setTracker({data: res.data});
    }catch(err){
      console.error(err.message);
    }

  }
  // On Login use effect
  useEffect(()=> {
    

    console.log("Tracker - use Effect Acitvated!!!");
    
  //  setLoading(true);
  if(auth.token)
    _getAllTracker();
  },[auth.token])



  return (
    <TrackerContext.Provider value={[tracker, setTracker]}>
      {props.children}
    </TrackerContext.Provider>
  )
}

export {TrackerProvider, TrackerContext};