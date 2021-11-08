import React from "react";
import axios from "axios";


function EmployeeDashboard(){





return(
    <div>
        <h1>Dashboard</h1>

            <Link to="/">
                    <button ><span><h3>Pick Up Shift</h3></span></button>
                </Link>
            <Link to ="/Mohammad">
                <button ><span><h3>Drop Shift</h3></span></button>
            </Link>
            <Link to="/Ana">
                <button ><span><h3>View Shyfts</h3></span></button>
            </Link>
           
    </div>
)

}

export default EmployeeDashboard;