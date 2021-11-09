import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FindShyft(){

    const [Shifts, getShifts] = useState([]);
    const [shiftTitle, getShiftTitle] = useState('');
    const [location, getLocation] = useState('');
    const [time, getTime] = useState('');
    const [date, getDate] = useState('');

    const submitHandler = async (e) => {
        axios.post(`/newShift`, {
            shiftTitle,
            location,
            time,
            date,
        });
    }

    const DeleteHandler = async (e) => {
        axios.delete(`/deleteShift`, {
            shiftTitle,
            location,
            time,
            date,
        });
    }

       const ViewHandler = async (e) => {
        axios.put(`/viewShift`, {
            shiftTitle,
            location,
            time,
            date,
        });
    }


      var list = Shifts.map(function(shift){
        return(
          <div>
            <h1>Current Shifts</h1> 
            {shift.data.map(item => 
                <div class="card">
                  <div id="shiftTitle">Shift Title: {item.Title}</div>
                  <div id="shiftLocation">Location: {item.Location}</div>
                  <div id="shiftTime">Time: {item.Time}</div>
                  <div id="shiftDate">Date: {item.Date}</div>

                  <form onSubmit={DeleteHandler}><button type ='submit' id='view'>Delete Shift</button></form>
                  <form onSubmit={ViewHandler}><button type ='submit' id='view'>Delete Shift</button></form>
                  
                </div>
            )}
          </div>
        )
      })
      
    return(
<form onSubmit={submitHandler}>
        <h1>Available Shyfts</h1>
        <label>
            Shift:
        </label>
        <label>
            Location:
        </label>
        <label>
            Start Time:
        </label>
    <button>Find Shift</button>
    </form>
    
    )
      
}

export default FindShyft;