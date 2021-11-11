import React from "react";
import { Link } from "react-router-dom";


function EmployeeDashboard(){

return(
    <div className="content-wrap">
        <h1>Dashboard</h1>

            <Link to="/createShyft">
                <button ><span><h3>Pick Up Shyft</h3></span></button>
            </Link>
            <Link to="/createShyft">
                <button ><span><h3>Scheduled Shyfts</h3></span></button>
            </Link>
    </div>
)

}

export default EmployeeDashboard;