import React from "react";
import { Link } from "react-router-dom";


function EmployeeDashboard(){

return(
    <div className="content-wrap">
        <h1>Dashboard</h1>

            <Link to="/employeeFind">
                <button ><span><h3>Pick Up</h3></span></button>
            </Link>
            <Link to="/employeeViews">
                <button ><span><h3>View Scheduled</h3></span></button>
            </Link>
    </div>
)

}

export default EmployeeDashboard;