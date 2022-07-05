import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import TopTen from "../cryptocurrency/TopTen";

// import Login from '../Auth/Login';
// import Register from '../Auth/Register';


const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "75px", width: "100%"}}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topten" element={<TopTen />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}

        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;