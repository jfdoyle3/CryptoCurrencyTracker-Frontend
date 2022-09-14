import React, {useEffect, useContext, useState}from "react";
import Select from '../common/Select';
import '../../styling/Test.css';
import Container from "../common/Container";
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';
import CurrencyDaily from '../Cryptocurrencies/Models/CurrencyDaily';


const TestPage =()=>{

  const symbol="BTC";
  const options = ['One', 'Two', 'Three', 'Four', 'Five'];
  const [dailyDates, setDailyDates]=useState([]);
  const [daily, setDaily]=useState([]);
  const [auth, setAuth]=useContext(AuthContext);

  useEffect(() => {
    const requestOptions = {
      headers: { 'Authorization': `Bearer ${auth.token}` }
    };
    const url = `${apiHostUrl}/api/currency/getDailyPrice/${symbol}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url,requestOptions);
        const json = await response.json();
        setDaily(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
  
const onOptionChangeHandler = (event) => {
  console.log("User Selected Value - ", event.target.value)
}
const displayDaily = () => {
  return daily.map(info => <CurrencyDaily currencyDaily={info} key={info.ranking} />)
}

const selectDaily = () => {
  return daily.map(info => <CurrencyDaily currencyDaily={info} key={info.ranking} />)
}

//let lastestDaily=daily.find(item => item.id===30);
const lastestDaily=daily.at(-1);



  return (
    <Container>
        <div style={{
                     display: 'inline-flex',
                     flexDirection: 'row',
                     float: 'right',
                     justifyContent:'flex-end',
                     flexWrap: 'wrap',
                     gap: '1px',
                     backgroundColor: 'black',
                     width: '100%'
          }}>
            <div style={{
                          flexDirection: 'column',
                          flex: '2',
                          backgroundColor: 'grey',
                          postion: 'fixed'

            }}>
              <select onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
              </select>
             {displayDaily()} 
             {/* <CurrencyDaily currencyDaily={lastestDaily} /> */}
          </div>

          <div style={{
                      flexDirection: 'column',
                      flex: '1',
                      backgroundColor: 'grey'
          }}>
            <h1>Static Symbol: BTC</h1>
          </div>
        </div>

      </Container>
  )
}

export default TestPage;