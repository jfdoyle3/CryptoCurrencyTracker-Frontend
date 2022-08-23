import React, {useContext, useState}from "react";
import { CurrenciesContext } from "../Providers/CurrenciesProvider";
import  Container  from "../common/Container";
import Button from '../common/Button';
import { AuthContext } from "../Providers/AuthProvider";
import Ratings from '../Ratings/Ratings';
// import '../../styling/CurrencyHeader.css';


const CurrencyHeader=(props)=>{
    const {id, name,logoUrl,symbol}=props.crypto;
    const {id: trackerId}=props.user;
    
    return (
			
					<div style={{display: "flex"}}>
            <table>
              <tr> 
                <td>
                  <img src={logoUrl} width={100} height={100} alt={name} />
                </td>
                <td>
                  <h1>Symbol: {symbol}</h1>
                </td>
                <td>
                  <h1>Name: {name}</h1>
                </td>
                <td>         
                  <Ratings a={props.crypto} b={props.user}/>
                </td>
              </tr>
            </table>
					</div>
			 
    )
}

export default CurrencyHeader;