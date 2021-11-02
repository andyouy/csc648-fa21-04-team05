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
        <Link to="/createAccount">Create Account</Link>
        </li>
      <li>
          {!loggedIn ? <Link to="/login">Login</Link> : null}
      </li>
      {loggedIn ? <Link to= "/"><button onClick={logoutHandler}>logout</button></Link> : null}
    </div>

    );
}

export default Navbar;