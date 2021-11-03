import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
    return(
<div> 
    <h1>Team 5 - About Us</h1>

    <Link to="/James">
            <button ><span><h3>James Giatpaiboon</h3></span></button>
          </Link>
    <Link to ="/Mohammad">
        <button ><span><h3>Mohammad Khan</h3></span></button>
    </Link>
    <Link to="/Ana">
        <button ><span><h3>Ana Navarro</h3></span></button>
    </Link>
    <Link to="/Andy">
        <button ><span><h3>Andy Ouyang</h3></span></button>
    </Link>
    <Link to="/Courtney">
    <button ><span><h3>Courtney Radford</h3></span></button>
    </Link>
    
</div>
    );
}
export default AboutUs;