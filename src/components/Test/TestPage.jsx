import React from "react";
import Select from '../common/Select';
import '../../styling/Test.css';
import Container from "../common/Container";


const TestPage =()=>{

  

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