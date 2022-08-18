import React from 'react';
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

  return (
    <div>
      <p>Symbol{symbol}</p>
      <p>Price {price}</p>
      <p>Price Date{priceDate}</p>
      <p>Price TimeStamp {priceTimeStamp}</p>
      <p>Circulating Supply {circulatingSupply}</p>
      <p>Max Supply {maxSupply}</p>
      <p>Market Cap {marketCap}</p>
      <p>High {high}</p>
      <p>High TimeStamp {highTimeStamp}</p>    
    </div>
       
  )
}

export default CurrencyDaily;

// @Column(name = "symbol")
// private String symbol;

// @Column(name = "price")
// private String price;

// @Column(name = "price_date")
// private String priceDate;

// @Column(name = "price_timestamp")
// private String priceTimeStamp;

// @Column(name = "circulating_supply")
// private String circulatingSupply;

// @Column(name = "max_supply")
// private String circulatingSupply;

// @Column(name = "market_cap")
// private String marketCap;

// @Column(name = "high")
// private String high;

// @Column(name = "high_timestamp")
// private String highTimeStamp;