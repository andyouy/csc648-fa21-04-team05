import { useEffect, useState } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";

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
    //     axios
    // }

    const deleteShift = (id) => {
        axios.delete(`/api/deleteShift/${id}`).then((response) => {
          if(response){
            history.go(0);
          }
        });
      };

      return(
        <div className="content-wrap">
            <h1>Unclaimed Shifts</h1><hr/>
            <div className="shifts">
                {shifts.map((val,key) =>
                {
                    return (
                        <div className="list-item">
                            <div className="shift-list-data"><h3>{val.title} </h3></div>  
                            <div className="shift-list-data"><h3>{val.date} </h3></div>
                            <div className="shift-list-data"><h3>{val.time} </h3></div>
                            <div className="shift-list-data"><h3>${val.minPay}.00</h3></div>

                            <div className="list-actions">
                                <button className="btn-action" onClick={()=> deleteShift(val.shiftID)}>Edit</button>
                                <button className="btn-action" onClick={()=> deleteShift(val.shiftID)}>Delete</button>
                            </div>
                        </div>

                    )
                    return (
                        <div className="shift">
                            <div>
                                <h3>date: {val.date}</h3>
                                <h2>${val.minPay}.00</h2>
                                <h3>seeking: {val.title} @ {val.createdBy}</h3>
                                <h3>start time: {val.time}</h3>
                                <h3>address: {val.location}</h3>
                            </div>

                            <div>
                                <button className="btn-action" onClick={()=> deleteShift(val.shiftID)}>Edit</button>
                                <button className="btn-action" onClick={()=> deleteShift(val.shiftID)}>Delete</button>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
      );
}

export default EmployerViews;