import React,{ useEffect }  from "react";



const Logout =()=>{
  
  useEffect=()=>{
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

