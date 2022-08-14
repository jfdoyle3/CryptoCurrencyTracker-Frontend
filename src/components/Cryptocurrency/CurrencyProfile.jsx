import React from "react";
import CurrenciesDaily from "./CurrenciesDaily";


const CurrencyProfile=(props)=>{

 //   const{name,ranking,logoUrl,symbol}=props.currencyInfo


    return (

        <div>
            <h1>Currency Profile</h1>
            <CurrenciesDaily/>

        </div>
    )
}

export default CurrencyProfile;