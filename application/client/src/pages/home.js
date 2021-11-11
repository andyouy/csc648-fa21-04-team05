import React from 'react';
import logo from '../assets/logo.png';

function Home() {

  return (
    <div className="content-wrap">

      <div className="masthead">
        <h1> WELCOME </h1>
        <hr/>
      </div>

      <div className="container">
        <img src={logo}/>
      </div>

    </div>
  );
}

export default Home;