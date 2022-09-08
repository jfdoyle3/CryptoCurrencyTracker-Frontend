import React from "react";
import Select from '../common/Select';
import '../../styling/Test.css';
import Container from "../common/Container";


const TestPage =()=>{

  const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];

  return (
    <Container>
        <div id="divOne">
          <h1> Header</h1>
        </div>
    
        <div id="divTwo">
            <div id="divThree">
              <h1>Left Side</h1>
          </div>

          <div id="divFour">
             <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          </div>
        </div>

        </Container>
  )
}

export default TestPage;