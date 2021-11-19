import React from "react";
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";


function EmployeeDashboard() {

    const [users, setUsers] = useState([]);

    let history = useHistory;

    // const dashboardRouter = (id) => {
    //     axios.get("/api/login", {withCredentials: true}).then((response) =>{
    //       updateUserState(response.data.isBusinessAccount);
    //       updateLoginState(null);
    //       history.go(0);
    //     })
    //     .catch((err) =>{
    //       console.log(err);
    //     });
    
    //   }
    
    const isBusinessAccount = () => {
        axios.get(users.map)
    }

    
return(
    <div className="content-wrap">

        <h1>Employee Dashboard</h1><hr/>

        {/* {!isBusinessAccount ? */}
            <Link to="/employeeFind"><button className="btn-choice"><span><h3>Claim Shift</h3></span></button></Link>
            {/* : */}
            {/* <Link to="/createShyft"><button className="btn-choice"><span><h3>Create Shift</h3></span></button></Link> */}
        {/* } */}

        {/* {!isBusinessAccount ? */}
            <Link to="/employeeViews"><button className="btn-choice"><span><h3>View Claimed</h3></span></button></Link>
            {/* : */}
            {/* <Link to="/employerViews"><button className="btn-choice"><span><h3>View Unclaimed</h3></span></button></Link> */}
        {/* } */}

            {/* {!isBusinessAccount ? <Link to="/login">Login</Link> : <Link to="/" onClick={dashboardRouter}> Logout</Link>}
            {!isBusinessAccount ? <Link to="/login">Login</Link> : <Link to="/" onClick={dashboardRouter}> Logout</Link>} */}

    </div>
)

}

export default EmployeeDashboard;