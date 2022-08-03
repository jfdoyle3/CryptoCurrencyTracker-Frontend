import React from "react";


const Logout =()=>{
  
  const logout=()=>{
    window.location.reload(false);
  }

  return (
    <div>
      <h1>You are Logged out</h1>
    </div>
  )
}



// this will refresh page and clear local storage
// window.location.reload(false);
// redirect to home.

