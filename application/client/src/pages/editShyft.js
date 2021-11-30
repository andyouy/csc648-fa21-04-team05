import React, { useEffect, useState } from 'react';
import {  useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import moment from 'moment'

function EditShyft(){

    // const [Shifts, setShifts] = useState([]);
    const [shiftTitle, setShiftTitle] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [minPay, setMinPay] = useState('');

    const {id} = useParams();
    
    // NEW a/o 11/11

    // add error handling
    const [error, setError] = useState('');

    let history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        axios.put(`/api/editShift`, {
            id,
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

    useEffect(() => {
        console.log(id)
        axios.post("/api/getEditShift", {
            id: id
        })
        .then((response) => {
            setShiftTitle(response.data.title);
            setLocation(response.data.location);
            setTime(response.data.time);
            setDate(moment(response.data.date).format('YYYY-MM-DD'));
            setMinPay(response.data.minPay);
            })
        }, []);

      
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
            value={date}
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
    <button className="btn btn-submit">Edit Shift</button>
    {error ? <p style={{color: "red"}}>{error}</p> : null}
    </form>
    </div>
)
      
}

export default EditShyft;