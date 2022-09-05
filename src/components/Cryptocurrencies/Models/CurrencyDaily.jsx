import React from 'react';
import Moment  from 'react-moment';
import "../../../styling/Table.css";

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

        let formatter= new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        });
        let priceFormatted=formatter.format(parseFloat(price).toFixed(2));
        let rndHigh=parseFloat(high).toFixed(2);
        // const arrPriceTimeStamp=priceTimeStamp.split("T");
        // let priceDate=arrPriceTimeStamp[0];
        // let timeStamp=arrPriceTimeStamp[1].substring(0,8);
        // let highDate=highTimeStamp.substring(0,10);
        // UTC -5

      
        
  return (
        <table id="daily">
          <tr key={id}>
            <th>Price</th>
            <td>{priceFormatted}</td> 
          </tr>
          <tr key={id}>
            <th>Price Date</th>
            <td><Moment>{priceDate}</Moment></td> 
          </tr>
          <tr key={id}>
            <th>Price TimeStamp</th>
            <td><Moment>{priceTimeStamp}</Moment></td> 
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
            <td>{rndHigh}</td> 
          </tr>
          <tr key={id}>
          <th>Max Supply</th>
            <td>{maxSupply}</td> 
          </tr>
          <tr key={id}>
          <th>High TimeStamp</th>
            <td><Moment>{highTimeStamp}</Moment></td> 
          </tr>
        </table>
  )
}

export default CurrencyDaily;