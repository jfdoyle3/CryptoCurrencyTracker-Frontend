import React from "react";
import BorderCard from "../../common/BorderCard";

const Favorite=()=>{


  return(
    <table>
        <tr>
        <th></th>
        <th>Rank</th>
        <th>Name</th>
        <th>Symbol</th>
      </tr>
        <tr>
          <td>
            Image
          </td>
          <td>1</td>
          <td>BTC</td>
          <td>Symbol</td>
          <td>
            <button
              type="button">
              Delete
            </button>
          </td>
        </tr>
    </table>
  )
}

export default Favorite;