import React from "react";
import { Link } from "react-router-dom";


function EmployeeDashboard(){

return(
    <div>
        <h1>Dashboard</h1>

            <Link to="/employeeFind">
                <button ><span><h3>Find Shyft</h3></span></button>
            </Link>
            <Link to="/employeeViews">
                <button ><span><h3>View Shyfts</h3></span></button>
            </Link>
           
    </div>
)

}

export default EmployeeDashboard;