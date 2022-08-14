import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  CurrencyDaily from './Models/CurrencyDaily';
import { AuthContext } from '../Providers/AuthProvider';


const CurrenciesDaily = (props) => {
   const[currenciesDaily,setCurrenciesDaily]=useState([]);
  const [loading, setLoading]=useState(true); 
  const [auth, setAuth]=useContext(AuthContext);
  const staticSymbol="btc"; 

  useEffect(()=> {
    console.log("CurrenciesDaily - use Effect Acitvated!!!");
    const _getDailyPrice=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/currency/dailyPrice/${staticSymbol}`,
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
    _getDailyPrice();
  },[])

  const displayDaily = () => {
    return currenciesDaily.map(info => <CurrencyDaily currencyDaily={info} key={info.ranking} />)
  }

  // const onSelect = (devId) => {
  //   navigate(`/developers/${devId}`)
  // }

  return (

    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Currencies</h1>
      <h1>{currenciesDaily[0].symbol}</h1>
      {loading ? 
        <Spinner /> 
      :
        displayDaily()
      }
    </div>
    
  )
}

export default CurrenciesDaily;