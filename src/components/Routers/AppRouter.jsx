import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home.org";
import TopFive from "../Cryptocurrencies/TopFive";
import Currencies from '../Cryptocurrencies/Currencies';
// import CurrenciesDaily from '../Cryptocurrencies/CurrenciesDaily';
import CurrenciesInterval from '../Cryptocurrencies/CurrenciesInterval';
import Trackers from "../Trackers/Trackers";
import Profile from "../Profiles/TrackerProfile";
import UpdateProfile from "../Profiles/UpdateProfile";
import CurrencyProfile from '../Profiles/CurrencyProfile';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Test from '../Test/TestPage';


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
          {/* <Route path="/dailyPrices" element={<CurrenciesDaily />} /> */}
          <Route path="/interval" element={<CurrenciesInterval />} />
          <Route path="/trackers" element={<Trackers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trackers/:trackId" element={<Profile />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/currencyProfile" element={<CurrencyProfile />} />
          <Route path="/test" element={<Test />} />
       </Routes>
      </div>
    </div>
  )
}

export default AppRouter;