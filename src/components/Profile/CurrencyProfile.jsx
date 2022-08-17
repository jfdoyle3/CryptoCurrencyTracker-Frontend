import React, {useContext}from "react";
import CurrenciesDaily from "../Cryptocurrency/CurrenciesDaily";
 import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import CurrencyHeader from "./CurrencyHeader";
import { useLocation } from "react-router-dom";
import  Container  from "../common/Container";



const CurrencyProfile=(props)=>{
    const location=useLocation();
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===location.state.symbol);

    console.log("cp: "+currency.name);

 
    // if currency not found return 404
    return (
        <Container>
        <div>
             <CurrencyHeader a={currency}/>
            <CurrenciesDaily z={currency} />
        </div>
        </Container>
    )
}

export default CurrencyProfile;