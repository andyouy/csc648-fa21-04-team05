import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
    return(
    <div className="content-wrap"> 
        <h1>Team 5 - About Us</h1>

        <Link to="/James">
            <button className="btn-choice"><span><h3>James Giatpaiboon</h3></span></button>
        </Link>
        <Link to ="/Mohammad">
            <button className="btn-choice"><span><h3>Mohammad Khan</h3></span></button>
        </Link>
        <Link to="/Ana">
            <button className="btn-choice"><span><h3>Ana Navarro</h3></span></button>
        </Link>
        <Link to="/Andy">
            <button className="btn-choice"><span><h3>Andy Ouyang</h3></span></button>
        </Link>
        <Link to="/Courtney">
            <button className="btn-choice"><span><h3>Courtney Radford</h3></span></button>
        </Link>
        <Link to="/Jaguar">
            <button className="btn-choice"><span><h3>Jagjot Saggar</h3></span></button>
        </Link>
        
    </div>
    );
}
export default AboutUs;