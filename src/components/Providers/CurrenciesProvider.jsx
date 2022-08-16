import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
// import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';

const CurrenciesContext = React.createContext([]);

const CurrenciesProvider = (props) => {
  
  const [currencies, setCurrencies] = useState({data:[{name: null, ranking: null,logoUrl: null,symbol: null, ratings: [], timeStamp: 0}]});
  const [auth, setAuth]=useContext(AuthContext);

  const _getAllCurrencies= async()=>{
    if(!auth.token){
      return;
    }
    
    try{
      const res=await axios.get(`${apiHostUrl}/api/currency/`,
      {
        headers:{
          Authorization: `Bearer ${auth.token}`
        }
      });

      console.log(res.data);
     // setLoading(false);
      setCurrencies({data: res.data,timeStamp: new Date().getTime()});
    }catch(err){
      console.error(err.message);
    }

  }
  // On Login use effect
  useEffect(()=> {
    

    console.log("Currencies - use Effect Acitvated!!!");
    
  //  setLoading(true);
    _getAllCurrencies();
  },[auth.token])



  return (
    <CurrenciesContext.Provider value={[currencies, setCurrencies]}>
      {props.children}
    </CurrenciesContext.Provider>
  )
}

export {CurrenciesProvider, CurrenciesContext};