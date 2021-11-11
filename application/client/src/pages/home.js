import React from 'react';
import {  Link } from "react-router-dom";
// import logo from '../assets/logo.png';

function Home() {

  return (
    <div className="content-wrap">

      <div className="masthead">
        <h1> WELCOME </h1>
        <hr/>
      </div>

      <div className="container">
        {/* <img src={logo}/> */}
        {/* <Link to="/login">
                <button className="btn btn-choice"><span><h3>Sign In</h3></span></button>
        </Link>
        <Link to="/mainCreateAccount">
            <button className="btn btn-choice"><span><h3>Register</h3></span></button>
        </Link> */}
      </div>
    </div>
  );
}

export default Home;