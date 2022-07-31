import React from "react";

const Favorite = (props) => {

 const {name,ranking,logoUrl,symbol}=props.favorites

  return (
    <table >
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
                    type="button">
                    delete
                  </button>
                </td>
              </tr>
        </table>
  )
}

export default Favorite;