import React from 'react';
import "../../../styling/Table.css";

const CurrencyInterval = (props) => {

    const{id,
          symbol,
          volume,
          priceChange,
          priceChangePct,
          volumeChange,
          volumeChangePct}=props.currencyInterval

  return (
        <table border={1}>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
            </tr>
              <tr key={id}>
                <td>{symbol}</td>
                <td>{volume}</td>
                <td>{priceChange}</td>
                <td>{priceChangePct}</td>
                <td>{volumeChange}</td>
                <td>{volumeChangePct}</td>
              </tr>
        </table>
  )
}

export default CurrencyInterval;


	
// timeInterval
// symbol
// volume
// priceChange
// priceChangePct
// volumeChange
// volumeChangePct