import React, {useContext, Fragment} from 'react';
import NavButton from './NavButton';
import {AuthContext} from '../Providers/AuthProvider'

const NavBar = (props) => {
 const [auth] = useContext(AuthContext)
  console.log("NavBar-ran");
  return (
    <nav style={{
      display:'flex',
      backgroundColor: "#f2a900",
      position: "absolute",
      width: "100%",
      zIndex: 9999,
      top: 0,
      left: 0,
      flexDirection:'row',
      height: '75px'
    }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0em 1.2em'
      }}>
        <h1 style={{color: "#006097"}}>Cryptocurrency Tracker</h1>
      </div>
        <div style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
          padding: '0em 1.2em',
          justifyContent: 'flex-end'
        }}>
          <NavButton to="/" label="Home" />
          {auth.token ? (
            <Fragment>
              <NavButton to="/trackers" label="Trackers" />
              <NavButton to="/currencies" label="Currencies"/>
              {/* <NavButton to="/topfive" label="Top Five" /> */}
            </Fragment>
          ) : (
            <Fragment>
              <NavButton to="/login" label="Login" />
              <NavButton to="/register" label="Sign up" />
            </Fragment>
          ) }
        </div>
    </nav> 
  )
}

export default NavBar;