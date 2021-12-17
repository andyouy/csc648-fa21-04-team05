import React from "react";
import { Link } from "react-router-dom";


function EmployerDashboard(){

return(
    <div className="content-wrap">
        <h1>Employer Dashboard</h1><hr/>

            <Link to="/createShyft">
                <button className="btn-choice"><span><h3>Create Shift</h3></span></button>
            </Link>
            <Link to="/employerViews">
                <button className="btn-choice"><span><h3>View Unclaimed</h3></span></button>
            </Link>
            <Link to="/employerShiftsClaimed">
                <button className="btn-choice"><span><h3>View Claimed</h3></span></button>
            </Link>
    </div>
)

}

export default EmployerDashboard;