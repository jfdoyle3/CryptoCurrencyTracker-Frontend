import React, {useContext}from "react";
import CurrenciesDaily from "../Cryptocurrency/CurrenciesDaily";
 import { CurrenciesContext } from "../Providers/CurrenciesProvider";
 import  Container  from "../common/Container";


const CurrencyHeader=(props)=>{
    const {name,ranking,logoUrl,symbol}=props.a;
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===props.symbol);

   
 
    // if currency not found return 404
    return (
        <Container>
            <div style={{display: "flex"}}>
                <h1>Rank: {ranking}</h1>
                <img src={logoUrl} width={100} height={100} alt={name} />
                <h1>Symbol: {symbol}</h1>
                <h1>Name: {name}</h1>            
                <button>Like</button>
                <button>Not Like</button>
            </div>
        </Container>
    )
}

export default CurrencyHeader;