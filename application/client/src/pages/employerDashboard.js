import React, { useState } from 'react';
import axios from 'axios';

function EmployerDashboard(){

    const [Shifts, setShifts] = useState([]);
    const [shiftTitle, setShiftTitle] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

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
      
    return(
    <form onSubmit={submitHandler}>
        <h1>Employer Dashboard</h1>
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

export default EmployerDashboard;