import React from 'react';
import { Link } from "react-router-dom";

function MainCreateAccount() {
  return (
    <div className="content-wrap">
      
    <h1>Create Account</h1>
    <p>Select Account Type: </p>

    <Link to="/employeeAccount">
    <button className="btn-choice"><span><h3>Employee</h3></span></button>
    </Link>
    <Link to="/employerAccount">
    <button className="btn-choice"><span><h3>Employer</h3></span></button>
    </Link>
    </div>
  );
}

export default MainCreateAccount;