import React from 'react';
import "../../Styling/CurrencyTable.css";

const CurrencyDaily = (props) => {

    const{name,ranking,logoUrl,symbol}=props.currencyInfo

  return (
        <table border={1}>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
            </tr>
              <tr key={ranking}>
                <td>
                <img src={logoUrl} width={25} height={25}  alt={name} />
                </td>
                <td>{ranking}</td>
                <td>{name}</td>
                <td>{symbol}</td>
                <td>
                  <button
                    className="waves-effect waves-light btn-small">
                    View
                  </button>
                </td>
              </tr>
        </table>
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
// private String maxSupply;

// @Column(name = "market_cap")
// private String marketCap;

// @Column(name = "high")
// private String high;

// @Column(name = "high_timestamp")
// private String highTimeStamp;