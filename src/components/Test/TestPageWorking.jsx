import React from "react";
import Select from '../common/Select';
import '../../styling/Test.css';


const TestPageWorking =()=>{

  // Options is Dates of Daily for a Currency from the Database
  const options = ['One', 'Two', 'Three', 'Four', 'Five'];

  // Get Selected Date from Database (Backend) or List (Created by frontend)
  // Display it.
  const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }

  return (
    <div id="App">
         <center>
                <h1>Welcome to Geeks for Geeks</h1>
                <h3>HTML select tag in React js</h3>
  
                <select onChange={onOptionChangeHandler}>
  
                    <option>Please choose one option</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
            </center>
      </div>
  )
}

export default TestPageWorking;