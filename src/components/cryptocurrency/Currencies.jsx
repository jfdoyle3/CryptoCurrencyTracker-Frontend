import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import { apiHostUrl } from '../../config';
import  Currency from './Models/Currency';
import { AuthContext } from '../Providers/AuthProvider';


const Currencies = () => {
  const[currencies,setCurrencies]=useState([]);
  const [loading, setLoading]=useState(true); 
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(()=> {
    console.log("Currencies - use Effect Acitvated!!!");
    const _getAllCurrencies=async()=>{
      try{
        const res=await axios.get(`${apiHostUrl}/api/currency/`,
        {
          headers:{
            Authorization: `Bearer ${auth.token}`
          }
        });
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

  return (
    
     <div style={{
       display: "flex",
       flex: "1",
       flexDirection: "column",
       alignItems: 'center',
       minHeight: '100vh',
     }}> 
      <table>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
            {loading ? 
        <Spinner /> 
      :
        displayCurrencies()
      }
      </table>
    </div>
  )
}

export default Currencies;