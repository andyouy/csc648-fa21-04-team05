import React, { useEffect, useState } from 'react';
import {  useHistory } from "react-router-dom";
import axios from 'axios';

function CreateShyft(){

    // const [Shifts, setShifts] = useState([]);
    const [shiftTitle, setShiftTitle] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [minPay, setMinPay] = useState('');
    
    // NEW a/o 11/11

    // add error handling
    const [error, setError] = useState('');

    let history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        axios.post(`/api/newShift`, {
            shiftTitle,
            location,
            time,
            date,
            minPay
        })
        .then(response => {
            if(response){
                // refreshes page on click
                history.push("/employerViews")
                // return list;
            }
        })
        .catch(error => {
            console.log(error.response.data)
            if(error.response.data === "fields empty"){
                setError("Please fill out all fields")
            }
        });
    }

    // const DeleteHandler = async (e) => {
    //     axios.delete(`/deleteShift`, {
    //         shiftTitle,
    //         location,
    //         time,
    //         date,
    //     });
    //    }

    //    const ViewHandler = async (e) => {
    //     axios.put(`/viewShift`, {
    //         shiftTitle,
    //         location,
    //         time,
    //         date,
    //     });
    //   }


    // var list = Shifts.map(function(shift){
    // return(
    //     <div className="content-wrap">
    //     <h1>Current Shifts</h1> 
    //     {shift.data.map(item => 
    //         <div class="card">
    //             <div id="shiftTitle">Shift Title: {item.Title}</div>
    //             <div id="shiftLocation">Location: {item.Location}</div>
    //             <div id="shiftTime">Time: {item.Time}</div>
    //             <div id="shiftDate">Date: {item.Date}</div>

    //             <form onSubmit={DeleteHandler}><button type ='submit' id='view'>Delete Shift</button></form>
    //             <form onSubmit={ViewHandler}><button type ='submit' id='view'>Delete Shift</button></form>
                
    //         </div>
    //     )}
    //     </div>
    // )
    // })
      
    return(
    <div className="content-wrap">
    <form onSubmit={submitHandler}>
        <h1>Create Shyft</h1>
        <hr/><br/>
        <label>
            Position:
            <input
            name="Title"
            placeholder="Shift"
            type='text'
            value={shiftTitle}
            onChange={e => setShiftTitle(e.target.value)}
            />
        </label>
        <label>
            Address:
            <input
            name="Location"
            placeholder="Business Location"
            type='text'
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
        </label>
        <label>
            Start Time:
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
        <label>
            Base: $
            <input
            name="pay"
            placeholder="Per Shift"
            type='text'
            value={minPay}
            onChange={e => setMinPay(e.target.value)}
            />
        </label>
    <button className="btn btn-submit">Create Shift</button>
    {error ? <p style={{color: "red"}}>{error}</p> : null}
    </form>
    </div>
)
      
}

export default CreateShyft;