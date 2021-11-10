import React from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
import {  useHistory } from "react-router-dom";
import Logo from '../assets/logo.png';

const Navbar = ({loggedIn,updateUserState, updateLoginState}, props) => {

    let history = useHistory;
    const logo = require('../assets/logo.png');

    const logoutHandler = () => {
        axios.post("/api/logout", {withCredentials: true}).then((response) =>{
          updateUserState(response.data.loggedIn);
          updateLoginState(null);
          history.push("/");
        })
        .catch((err) =>{
          console.log(err);
        });
    
      }
          
    return(
      
      <nav className="navbar">     
        {/* <a href="home.html"><img src={Logo} id="logo"></img></a> */}
        {/* <a href="home.html"><img src={Logo} id="logo"></img></a> */}
        <a id='logo'><Link to="/">Shyft</Link></a>
        <ul className="navbar-nav"> {props.children} </ul>
        
        <ul className="navbar-nav">
          <Link to="/">Home</Link>
        </ul>
        <ul className="navbar-nav">
            <Link to="/aboutUs">About Us</Link>
        </ul>
        <ul className="navbar-nav">
            <Link to="/mainCreateAccount">Create Account</Link>
        </ul>
        <ul className="navbar-nav">
          {!loggedIn ? <Link to="/login">Login</Link> : <Link to="/" onClick={logoutHandler}> Logout</Link>}
        </ul>

          {/* TEST */}
        {/* <ul><Link to="/employerDashboard">[TEST] Employer Dashboard</Link></ul>
        <ul><Link to="/createShyft">[TEST] Create Shyft</Link></ul>
        <ul><Link to="/employeeDashboard">[TEST] Employee Dashboard</Link></ul>
        <ul><Link to="/findShyft">[TEST] Find Shift</Link></ul> */}
      </nav>
      );

}

export default Navbar;