import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  CurrencyDaily from './Models/CurrencyDaily';


const CurrenciesDaily = () => {
  const[currenciesDaily,setCurrenciesDaily]=useState([]);
  const [loading, setLoading]=useState(true); 

  useEffect(()=> {
    console.log("CurrenciesDaily - use Effect Acitvated!!!");
    const _getAllCurrencies=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/currency/`);
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