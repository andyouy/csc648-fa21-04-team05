import { useEffect, useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";

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
        axios.put("/api/claimShift", {id: id})
        .then((response) => {
            if(response) {
                history.go(0)
            }
        })
    }

      return(
        <div className="shifts">
            {shifts.map((val,key) =>
            {
                return (
                    <div className="shift">
                        <div>
                            <h3>title: {val.title}</h3>
                            <h3>location: {val.location}</h3>
                            <h3>time: {val.time}</h3>
                            <h3>date: {val.date}</h3>
                        </div>

                        <div>
                            <button onClick={()=> claimShift(val.shiftID)}>Claim</button>
                        </div>
                    </div>

                )
            })}
        </div>
      );
}

export default EmployeeFind;