import React from "react";
import Select from '../common/Select';
import '../../styling/Test.css';


const TestPage =()=>{

  const Countries = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
  ];

  return (
    <table style={{width:'75%'}}>
        <tr>
          <th>Name:</th>
          <td>Sivaraman</td>
        </tr>
        <tr>
          <th>Mobile:</th>
          <td>123456789</td>
        </tr>
        <tr>
        <Select options={Countries} />
        </tr>
    </table>
  )
}

export default TestPage;