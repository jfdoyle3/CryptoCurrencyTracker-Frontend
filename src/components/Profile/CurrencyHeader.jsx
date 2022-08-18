import React, {useContext}from "react";
import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import  Container  from "../common/Container";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../common/Button';
import { AuthContext } from "../Providers/AuthProvider";


const CurrencyHeader=(props)=>{
    const {id, name,ranking,logoUrl,symbol}=props.a;
    const [currencies]= useContext(CurrenciesContext);
    const currency=currencies.data.find(cur => cur.symbol===props.symbol);
    const {auth}=useContext(AuthContext);
    console.log("cID: "+id);
    console.log("symbol: "+symbol);
    console.log("trackID: ");
    const liked=()=>{
        alert('You Liked me!!')
    }

    const dislike=()=>{
        alert("Aww you don't Like me")
    }
    return (
<Container>
            <div style={{display: "flex"}}>
                <img src={logoUrl} width={100} height={100} alt={name} />
                <h1>Symbol: {symbol}</h1>
                <h1>Name: {name}</h1>         
                <Button 
                        style={{
                        width: 'auto',
                        color: '#00ff00',
                        }}
                        onClick={liked}
                >
                <FontAwesomeIcon icon="fa-solid fa-thumbs-up"/>        
                </Button>
                <Button 
                        style={{
                        
                        width: 'auto',
                        color: '#ff0000',
                        }}
                        onClick={dislike}
                >
               <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />    
                </Button>
            </div>
        </Container>  
          )
}

export default CurrencyHeader;