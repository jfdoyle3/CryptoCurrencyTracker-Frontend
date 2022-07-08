// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import { apiHostUrl } from '../../config';

// const CurrencyInfoContext = React.createContext({});

// const CurrencyInfoProvider = (props) => {

//   const [currencyInfo,setcurrencyInfo]=useState([]);
//   const [loading, setLoading]=useState(true);
  
//   useEffect(()=> {
  
//     const getTopTen=async()=>{
//       try{
//         const res=await axios.get(`${apiHostUrl}/api/currency/`);
//         setTopTen(res.data);
//         setLoading(false);
//       }catch(err){
//         console.error(err.message);
//       }
//     }
//     setLoading(true);
//     getTopTen();

//   },[])

//   return (
//     <CurrencyInfoContext.Provider value={{}}>
//       {props.children}
//     </CurrencyInfoContext.Provider>
//   )
// }
// export {CurrencyInfoProvider, CurrencyInfoContext};