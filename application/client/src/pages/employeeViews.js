import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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


    return (
        <div className="content-wrap">
            <div className="shifts">
                <h1>Scheduled Shifts</h1><hr />
                <br></br>
                {shifts.map((val, key) => {
                    return (
                        <div className="shift">
                            <div className="shift-details">
                                <h2 class="shift-tile-pay">${val.minPay}.00 + tips</h2>
                                <h3 class="shift-tile-date">Date: {val.date}</h3>
                                <h3>Position: {val.title} @ {val.createdBy} </h3>
                                <h3>Address: {val.location}</h3>
                                <h3>Time: {val.time}</h3>

                            </div>

                            <button class="btn-action" onClick={() => dropShift(val.shiftID)}>Drop Shift</button>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default EmployeeViews;