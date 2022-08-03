import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import TopFive from "../Cryptocurrency/TopFive";
import Currencies from '../Cryptocurrency/Currencies';
import CurrenciesDaily from '../Cryptocurrency/CurrenciesDaily';
import CurrenciesInterval from '../Cryptocurrency/CurrenciesInterval';
import Trackers from "../Tracker/Trackers";
import Profile from "../Profile/Profile";
import Test from '../Cryptocurrency/Test';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import UpdateProfile from "../Profile/UpdateProfile";


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
          <Route path="/trackers" element={<Trackers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trackers/:trackId" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          <Route path="/update" element={<UpdateProfile />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;