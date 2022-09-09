import React, {useEffect, useContext}from "react";
import Select from '../common/Select';
import '../../styling/Test.css';
import Container from "../common/Container";
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';


const TestPage =()=>{

  const symbol="BTC";
  const [auth, setAuth]=useContext(AuthContext);

  useEffect(() => {
    const requestOptions = {
      headers: { 'Authorization': `Bearer ${auth.token}` }
    };
    const url = `${apiHostUrl}/api/currency/dailyPrice/${symbol}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url,requestOptions);
        const json = await response.json();
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
  

  return (
    <Container>
        <div style={{
                     display: 'inline-flex',
                     flexDirection: 'row',
                     float: 'right',
                     justifyContent:'flex-end',
                     flexWrap: 'wrap',
                     gap: '20px',
                     backgroundColor: 'red',
                     width: '100%'
          }}>
            <div style={{
                          flexDirection: 'column',
                          flex: '2',
                          backgroundColor: 'purple'

            }}>
              <h1>Left Side</h1>
          </div>

          <div style={{
                      flexDirection: 'column',
                      flex: '1',
                      backgroundColor: 'blue'
          }}>
            <h1>Right Side</h1>
          </div>
        </div>

      </Container>
  )
}

export default TestPage;