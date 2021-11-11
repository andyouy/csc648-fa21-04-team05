import React from "react";
import { Link } from "react-router-dom";


function EmployerDashboard(){

return(
    <div>
        <h1>Dashboard</h1>

            <Link to="/createShyft">
                <button ><span><h3>Create Shift</h3></span></button>
            </Link>
            <Link to ="/createShyft">
                <button ><span><h3>Drop Shift</h3></span></button>
            </Link>
            <Link to="/employerViews">
                <button ><span><h3>View Shyfts</h3></span></button>
            </Link>
           
    </div>
)

}

export default EmployerDashboard;