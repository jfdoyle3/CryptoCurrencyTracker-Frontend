import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  CurrencyInfo  from './CurrencyInfo';


const TopFive = (props) => {
  const[topFive,setTopFive]=useState([]);
  const [loading, setLoading]=useState(true); 

  useEffect(()=> {
  
    const _getTopFive=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/currency/topfive`);
        console.log(res.data);
        setLoading(false);
        setTopFive(res.data);
      }catch(err){
        console.error(err.message);
      }

    }
    setLoading(true)
    _getTopFive();
  },[])

  const displayCurrencyInfo = () => {
    return topFive.map(info => <CurrencyInfo currencyInfo={info} key={info.ranking} />)
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
        displayCurrencyInfo()
      }
    </div>
    
  )
}

export default TopFive;