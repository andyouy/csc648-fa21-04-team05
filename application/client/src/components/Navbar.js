import React from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
import {  useHistory } from "react-router-dom";

const Navbar = ({loggedIn, updateUserState, updateLoginState, loggedInUser}) => {

    let history = useHistory();

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
          
      const profileHandler = () => {
        history.push(`/userProfile/${loggedInUser}`)
      }


    return(
      
      <nav className="navbar">     
        <Link to="/" className="logo">Shyft</Link>
        
        <ul className="navbar-nav">
        <Link to="/">Home</Link>

        </ul>

        {/* <ul className="navbar-nav">
          {!loggedIn ? <Link to="/">Home</Link> : <Link to="/" hidden="true"></Link>}
        </ul> */}
        <ul className="navbar-nav">
          {!loggedIn ? <Link to="/login">Login</Link> : <Link to="/" onClick={logoutHandler}> Logout</Link>}
        </ul>

        <ul className="navbar-nav">
          {loggedIn ? <a onClick={profileHandler}>My Profile</a> : null}
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