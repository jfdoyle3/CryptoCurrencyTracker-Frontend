import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  Currency from './Currency';


const Currencies = () => {
  const[currencies,setCurrencies]=useState([]);
  const [loading, setLoading]=useState(true); 

  useEffect(()=> {
    console.log("Currencies - use Effect Acitvated!!!");
    const _getAllCurrencies=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/currency/`);
        console.log(res.data);
        setLoading(false);
        setCurrencies(res.data);
      }catch(err){
        console.error(err.message);
      }

    }
    setLoading(true)
    _getAllCurrencies();
  },[])

  const displayCurrencies = () => {
    return currencies.map(info => <Currency currencyInfo={info} key={info.ranking} />)
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

export default Currencies;