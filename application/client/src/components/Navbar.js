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
      <nav className="navbar">
        <div>
            <ul className="navbar-nav">
              
            </ul>
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
                <Link to="/login">Login</Link>
            </ul>
            <ul className="navbar-nav">
                <Link to="/logout">Logout</Link>
            </ul>

            {/* TEST */}
          <ul>
              <Link to="/employerDashboard">[TEST] Employer Dashboard</Link>
          </ul>
          <ul>
              <Link to="/createShyft">[TEST] Create Shyft</Link>
          </ul>
          <ul>
              <Link to="/employeeDashboard">[TEST] Employee Dashboard</Link>
          </ul>
          <ul>
              <Link to="/findShyft">[TEST] Find Shift</Link>
          </ul>
       </div>

      </nav>
    );

}

export default Navbar;