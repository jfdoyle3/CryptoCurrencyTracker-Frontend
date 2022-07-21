import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import TopFive from "../Cryptocurrency/TopFive";
import Currencies from '../Cryptocurrency/Currencies';
import CurrenciesDaily from '../Cryptocurrency/CurrenciesDaily';
import CurrenciesInterval from '../Cryptocurrency/CurrenciesInterval';
import Boo from '../Cryptocurrency/Boo';

// import Login from '../Auth/Login';
// import Register from '../Auth/Register';


const AppRouter = () => {
  
  console.log("Router - activated!!!");
  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "75px", width: "100%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topfive" element={<TopFive />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/dailyPrices" element={<CurrenciesDaily />} />
          <Route path="/interval" element={<CurrenciesInterval />} />
          <Route path="/boo" element={<Boo />} />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}

        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;