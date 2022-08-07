import React from 'react';
import "../../../styling/CurrencyTable.css";

const Currency = (props) => {

    const{name,ranking,logoUrl,symbol}=props.currencyInfo

  return (
          <tr key={ranking}>
            <td>
            <img src={logoUrl} width={25} height={25}  alt={name} />
            </td>
            <td>{ranking}</td>
            <td>{symbol}</td>
            <td>{name}</td>
            <td>
            </td>
          </tr>
  )
}

export default Currency;