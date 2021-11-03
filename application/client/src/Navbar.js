import React from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';

const Navbar = ({loggedIn,updateUserState, updateLoginState}) => {


    const logoutHandler = () => {
        axios.post("/api/logout", {withCredentials: true}).then((response) =>{
          updateUserState(response.data.loggedIn);
          updateLoginState(null);
        })
        .catch((err) =>{
          console.log(err);
        });
    
      }

      
    return(
<div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/aboutUs">About Us</Link>
    </li>
    <li>
        <Link to="/mainCreateAccount">Create Account</Link>
    </li>
    <li>
        <Link to="/login">Login</Link>
    </li>
  <li>
      <Link to="/employerDashboard">test employer</Link>
  </li>
    </div>

    );
}

export default Navbar;