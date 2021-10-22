import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
    return(
<div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/aboutUs">About Us</Link>
    </li>
    <li>
        <Link to="/createAccount">Create Account</Link>
    </li>
    <li>
        <Link to="/login">Login</Link>
    </li>
    </div>
    );
}

export default Navbar;