import React, { useEffect, useState } from 'react';
// import {  Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment'
import logo from '../assets/logo.png'

function Home() {

  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    axios.post("/api/getRecentShifts", {
    }).then((response) => {
        setShifts(response.data);
        console.log(response.data)
    })
}, []);


  return (
    <div className="content-wrap">

      {/* <h1> LANDING PAGE </h1><hr/> */}

      <img className='shyft-logo' src={logo}/>
      <h2>Recently Created Shifts</h2>
      <div className="shift-list-home">
          {shifts.map((val, key) => {
              return (
                  <div id={val.shiftID} key={key} className="shift">
                      <div className="list-details">
                          <p>date: {val.date}</p>
                          <h2>${val.minPay}.00</h2>
                          <h3>seeking: {val.title} @ {val.createdBy}</h3>
                          <h3>start time: {moment(val.time, 'HH:mm').format('hh:mm a')}</h3>
                          <h3>length: {val.length} hours</h3>
                          <h3>address: {val.location}</h3>
                      </div>
                  </div>

              )
          })}
      </div>
      {/* <div className="container">
        <Link to="/login">
                <button className="btn btn-choice"><span><h3>Sign In</h3></span></button>
        </Link>
        <Link to="/mainCreateAccount">
            <button className="btn btn-choice"><span><h3>Register</h3></span></button>
        </Link>
      </div> */}
    </div>
  );
}

export default Home;