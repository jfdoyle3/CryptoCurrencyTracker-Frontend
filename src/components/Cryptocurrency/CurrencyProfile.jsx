import React, {useContext}from "react";
import CurrenciesDaily from "./CurrenciesDaily";
 import { CurrenciesContext } from "../Providers/CurrenciesProvider";


const CurrencyProfile=(props)=>{

    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===props.symbol);

    console.log("cp: "+currencies.data[2].symbol);
 
    // if currency not found return 404
    return (

        <div>
            <h1>Currency Profile</h1>
          
            <h2>{currency}</h2>
            
            <CurrenciesDaily />

        </div>
    )
}

export default CurrencyProfile;