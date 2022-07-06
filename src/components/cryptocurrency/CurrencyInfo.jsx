import React from 'react';
import BorderCard from '../common/BorderCard';

const CurrencyInfo = (props) => {

    const{name,ranking,logoUrl,symbol}=props.currencyInfo

  return (

    <BorderCard>
      <h6>Rank: {ranking}</h6>
      <img src={logoUrl} width={50} height={50}  alt="currency logo" />
      <h6>Name: {name}</h6>
      <h6>Symbol: {symbol}</h6>
    </BorderCard>
  )
}

export default CurrencyInfo;


// private String currency_id;

// private String currency;

// private String symbol;

// private String name;

// private String ranking;

// private String logoUrl;