import { useEffect, useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";
import moment from 'moment'

function EmployeeFind() {
    const [shifts, setShifts] = useState([]);

    let history = useHistory();

    useEffect(() => {
        axios.get("/api/getAllShifts")
            .then((response) => {
                setShifts(response.data);
                console.log(shifts)
            })
    }, []);

    const claimShift = (id) => {
        axios.put("/api/claimShift", { id: id })
            .then((response) => {
                if (response) {
                    history.go(0)
                }
            })
    }

    return (
        <div className="content-wrap">
            <div>
                <h1>BROWSE AVAILABLE SHIFTS</h1>
                <hr />
            </div>
            <div className="available-shifts">
                {shifts.map((val, key) => {
                    return (
                        <div className="shift">
                            <div>
                                <h3>date: {val.date}</h3>
                                <h2>${val.minPay}.00</h2>
                                <h3>seeking: {val.title} @ {val.createdBy}</h3>
                                <h3>start time: {moment(val.time, 'HH:mm').format('hh:mm a')}</h3>
                                <h3>address: {val.location}</h3>
                            </div>

                            <div>
                                <button class="btn-claim-shift" onClick={() => claimShift(val.shiftID)}>Claim</button>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default EmployeeFind;