import { useEffect, useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";
import moment from 'moment'

function EmployeeViews() {
    const [shifts, setShifts] = useState([]);

    let history = useHistory();

    useEffect(() => {
        const data = localStorage.getItem("username")
        axios.post("/api/getClaimedShifts", {
            username: JSON.parse(data)
        }).then((response) => {
            setShifts(response.data);
            console.log(shifts)
        })
    }, []);

    const dropShift = (id) => {
        axios.put("/api/dropShift", { id: id })
            .then((response) => {
                if (response) {
                    history.go(0)
                }
            })
    }


    return(
    <div className="content-wrap">
        <div className="shifts">
            <h1>Scheduled Shifts</h1><hr/>
            <br></br>
            {shifts.map((val,key) =>
            {
                return (
                    <div className="shift">
                        <div className="shift-details">
                            <h2>${val.minPay}.00 + tips</h2>
                            <h3>position: {val.title} @ {val.createdBy} </h3>
                            <h3>address: {val.location}</h3>
                            <h3>time: {moment(val.time, 'HH:mm').format('hh:mm a')}</h3>
                            <h3>date: {val.date}</h3>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default EmployeeViews;