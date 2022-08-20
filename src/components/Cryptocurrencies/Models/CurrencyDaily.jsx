import React from 'react';
//import "../../../styling/Table.css";

const CurrencyDaily = (props) => {

    const{
          id, 
          symbol, 
          price,               
          priceDate,
          priceTimeStamp,
          circulatingSupply,
          maxSupply,
          marketCap,
          high,
          highTimeStamp,
        }=props.currencyDaily

  return (
        <table>
           <tr key={id}>
            <th>Symbol</th>
            <td>{symbol}</td> 
          </tr>
          <tr key={id}>
            <th>Price</th>
            <td>{price}</td> 
          </tr>
          <tr key={id}>
            <th>Price Date</th>
            <td>{priceDate}</td> 
          </tr>
          <tr key={id}>
            <th>Price TimeStamp</th>
            <td>{priceTimeStamp}</td> 
          </tr>
          <tr key={id}>
          <th>Circulating Supply</th>
            <td>{circulatingSupply}</td> 
          </tr>
          <tr key={id}>
          <th>Max Supply</th>
            <td>{maxSupply}</td> 
          </tr>
          <tr key={id}>
            <th>Market Cap</th>
            <td>{marketCap}</td> 
          </tr>
          <tr key={id}>
          <th>High</th>
            <td>{high}</td> 
          </tr>
          <tr key={id}>
          <th>Max Supply</th>
            <td>{maxSupply}</td> 
          </tr>
          <tr key={id}>
          <th>High TimeStamp</th>
            <td>{highTimeStamp}</td> 
          </tr>
        </table>
  )
}

export default CurrencyDaily;