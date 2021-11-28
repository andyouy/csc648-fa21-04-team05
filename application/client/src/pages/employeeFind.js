import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
                                <h2 class="shift-tile-pay">${val.minPay}.00</h2>
                                <h3 class="shift-tile-date">Date: {val.date}</h3>
                                <h3>Seeking: {val.title} @ {val.createdBy}</h3>
                                <h3>Start Time: {val.time}</h3>
                                <h3>Address: {val.location}</h3>
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