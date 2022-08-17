import React, {useContext}from "react";
import CurrenciesDaily from "../Cryptocurrency/CurrenciesDaily";
 import { CurrenciesContext } from "../Providers/CurrenciesProvider";


const CurrencyHeader=(props)=>{

    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===props.symbol);

    console.log("cp: "+currency);
 
    // if currency not found return 404
    return (

        <div>
            <h1>Rank: 1</h1>
            <h1>Logo: logo</h1>
            <h1>Symbol: BTC</h1>
            <h1>Name: Bitcoin</h1>

            <h1>Rating:</h1>
            
            <button>Like</button>
            <button>Not Like</button>

        </div>
    )
}

export default CurrencyHeader;