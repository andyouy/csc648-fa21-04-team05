import React from 'react';
import {  Link } from "react-router-dom";
import "../assets/App.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <p className="copyright">
                Copyright &copy; 2021 Shyft, Inc. All rights reserved.
            </p>

            <Link className="about-us" to="/aboutUs">About Us</Link>       

        </div>
        // <footer>
        //     Copyright &copy; 2021 Shyft, Inc. All rights reserved.
        // </footer>
    )
}
export default Footer;

