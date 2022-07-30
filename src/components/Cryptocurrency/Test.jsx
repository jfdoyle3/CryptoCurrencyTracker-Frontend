import React from "react";
import Hi_one from "./Models/Hi_one";
import Hi_two from "./Models/Hi_two";
import Hi_three from "./Models/Hi_three";

const Test=()=>{
  return (
    <div>
      <div className="container">
        <Hi_one />
      </div>
        <div className="row">
          <Hi_two />
        </div>
      <div>
        <Hi_three />
      </div>
    </div>
  )
}
export default Test;