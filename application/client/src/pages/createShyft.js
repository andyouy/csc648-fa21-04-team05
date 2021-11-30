import React, { useEffect, useState } from 'react';
import {  useHistory } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

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
        console.log(date)
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
            onChange={e => setDate(moment(e.target.value).format('MM/DD/YYYY'))}
            />
        </label>
        <label>
            Shift Length:
            <input
            name="Shift Length (estimated)"
            placeholder="hours"
            type='text'
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