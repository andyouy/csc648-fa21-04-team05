import { useEffect, useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";
import moment from 'moment';

function EmployerViews() {
    const [shifts, setShifts] = useState([]);

    let history = useHistory();

    useEffect(() => {
        const data = localStorage.getItem("username")

        axios.post("/api/getShifts", {
            username: JSON.parse(data)
        }).then((response) => {
            setShifts(response.data);
            console.log(shifts)
        })
    }, []);

    // const editShift = (id) => {
    //     axios.post("/api/getShifts", {
    //         username: JSON.parse(data)
    //     }).then((response)=> {

    //     })
    // },[]);


    const editShyftHandler = id => {
        history.push(`/editShyft/${id}`)
    }

    const deleteShift = (id) => {
        axios.delete(`/api/deleteShift/${id}`).then((response) => {
            if (response) {
                history.go(0);
            }
        });
    };

    return (
        <div className="content-wrap">
            <h1>Unclaimed Shifts</h1><hr />
            <div className="shift-list">
                {shifts.map((val, key) => {
                    return (
                        <div id={val.shiftID} key={key} className="shift">
                            <div className="list-details">
                                <p>date: {val.date}</p>
                                <h2>${val.minPay}.00</h2>
                                <h3>seeking: {val.title} @ {val.createdBy}</h3>
                                <h3>start time: {moment(val.time, 'HH:mm').format('hh:mm a')}</h3>
                                <h3>address: {val.location}</h3>
                            </div>
                            <div className="card-actions">
                                <button className="btn-edit" onClick={() => editShyftHandler(val.shiftID)}>Edit</button>
                                <button className="btn-action" onClick={() => deleteShift(val.shiftID)}>Delete</button>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default EmployerViews;