import React from "react";
import Select from '../common/Select';
import '../../styling/Test.css';


const TestPageSelection =()=>{

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
    <div id="App">
        <div className="select-container">
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
  )
}

export default TestPageSelection;