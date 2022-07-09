import React from 'react';

const Currency = (props) => {

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
                <td>
                  {/* <button
                    className="waves-effect waves-light btn-small"
                    // onClick={() => this.deleteTodoClicked(todo.id)}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
        </table>
  )
}

export default Currency;


// private String currency_id;