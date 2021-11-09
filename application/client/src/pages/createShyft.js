import React, { useEffect, useState } from 'react';
import {  useHistory } from "react-router-dom";
import axios from 'axios';

function CreateShyft(){

    const [Shifts, setShifts] = useState([]);
    const [shiftTitle, setShiftTitle] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    let history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        axios.post(`/api/newShift`, {
            shiftTitle,
            location,
            time,
            date,
        })
        .then(response => {
            if(response){
                history.go(0);
            }
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
        <h1>Create Shyft</h1>
        <label>
            Shift:
            <input
            name="Title"
            placeholder="Shift"
            type='text'
            value={shiftTitle}
            onChange={e => setShiftTitle(e.target.value)}
            />
        </label>
        <label>
            Location:
            <input
            name="Location"
            placeholder="Location"
            type='text'
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
        </label>
        <label>
            Time:
            <input
            name="Time"
            placeholder="Time"
            type='time'
            value={time}
            onChange={e => setTime(e.target.value)}
            />
        </label>
        <label>
            Date:
            <input
            name="Date"
            placeholder="Date"
            type='date'
            onChange={e => setDate(e.target.value)}
            />
        </label>
    <button>Create Shift</button>
    </form>
    
    )
      
}

export default CreateShyft;