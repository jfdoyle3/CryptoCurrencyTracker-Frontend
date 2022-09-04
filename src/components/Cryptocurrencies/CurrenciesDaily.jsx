import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  CurrencyDaily from './Models/CurrencyDaily';
import { AuthContext } from '../Providers/AuthProvider';

const CurrenciesDaily = (props) => {
  const {symbol}=props.crypto;
  const[currenciesDaily,setCurrenciesDaily]=useState([]);
  const [loading, setLoading]=useState(true); 
  const [auth, setAuth]=useContext(AuthContext);
  

  useEffect(()=> {
    console.log("CurrenciesDaily - use Effect Acitvated!!!");
   
    const _getDailyPrice=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/currency/dailyPrice/${symbol}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }

        });
        console.log(res.data);
        setLoading(false);
        setCurrenciesDaily(res.data);
      }catch(err){
        console.error(err.message);
      }

    }
    setLoading(true)
    if(auth.token){
      _getDailyPrice();
    }
  },[auth])

  const displayDaily = () => {
    return currenciesDaily.map(info => <CurrencyDaily currencyDaily={info} key={info.ranking} />)
  }

  return (

    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      {loading ? 
        <Spinner /> 
      :
        displayDaily()
      }
    </div>
    
  )
}

export default CurrenciesDaily;