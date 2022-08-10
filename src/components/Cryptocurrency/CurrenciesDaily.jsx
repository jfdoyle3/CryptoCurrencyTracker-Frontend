import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  CurrencyDaily from './Models/CurrencyDaily';
import { AuthContext } from '../Providers/AuthProvider';


const CurrenciesDaily = () => {
  const[currenciesDaily,setCurrenciesDaily]=useState([]);
  const [loading, setLoading]=useState(true); 
  const [auth, setAuth]=useContext(AuthContext);

  useEffect(()=> {
    console.log("CurrenciesDaily - use Effect Acitvated!!!");
    const _getAllCurrencies=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/getDailyPrice/BTC`,
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
    _getAllCurrencies();
  },[])

  const displayCurrencies = () => {
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
      {loading ? 
        <Spinner /> 
      :
        displayCurrencies()
      }
    </div>
    
  )
}

export default CurrenciesDaily;