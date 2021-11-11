import { useEffect, useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";

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
        axios.put("/api/dropShift", {id: id})
        .then((response) => {
            if(response) {
                history.go(0)
            }
        })
    }


      return(
        <div className="content-wrap">
            <div className="shifts">
                <h3>Claimed Shifts</h3>
                <br></br>
                {shifts.map((val,key) =>
                {
                    return (
                        <div className="shift">
                            <div>
                                <h3>title: {val.title}</h3>
                                <h3>location: {val.location}</h3>
                                <h3>time: {val.time}</h3>
                                <h3>date: {val.date}</h3>
                                <h3>min pay: {val.minPay}</h3>

                            </div>

                            <button onClick={()=> dropShift(val.shiftID)}>Drop Shift</button>
                        </div>

                    )
                })}
            </div>
        </div>
      );
}

export default EmployeeViews;