import React from "react";
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";


function EmployeeDashboard(){

    const [users, setUsers] = useState([]);

    
    let history = useHistory();

    useEffect(() => {
    const data = localStorage.getItem("username")
    axios.post("/api/login", {
        username: JSON.parse(data)
    }).then((response) => {
        setUsers(response.data);
        console.log(users)
        })
    }, []);


return(
    <div className="content-wrap">

        <h1>Dashboard</h1><hr/>

        {users.map((val,key) =>
                {
                    return (
                        <div className="shift-list">
                            <div className="shift-list-item" id="details-list-view">
                                <h3>{val.createdBy} </h3> 
                                </div>  
             


                        </div>

                    )
                })}

            <Link to="/employeeFind">
                <button className="btn btn-choice"><span><h3>Pick Up</h3></span></button>
            </Link>
            <Link to="/employeeViews">
                <button className="btn btn-choice"><span><h3>View Scheduled</h3></span></button>
            </Link>
    </div>
)

}

export default EmployeeDashboard;