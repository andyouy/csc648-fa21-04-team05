import React from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
import {  useHistory } from "react-router-dom";

const Navbar = ({loggedIn,updateUserState, updateLoginState}) => {

    let history = useHistory;
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
        {!loggedIn ? <Link to="/login">Login</Link> : <Link to="/" onClick={logoutHandler}> Logout</Link>}
    </li>

  {/*
  <li>
      <Link to="/employerDashboard">[TEST] Employer Dashboard</Link>
  </li>
  <li>
      <Link to="/createShyft">[TEST] Create Shyft</Link>
  </li>
  <li>
      <Link to="/employeeDashboard">[TEST] Employee Dashboard</Link>
  </li>
  <li>
      <Link to="/findShyft">[TEST] Find Shift</Link>
  </li> */}
    </div>

    );
}

export default Navbar;