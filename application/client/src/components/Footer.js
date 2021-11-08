import React from 'react';

const Footer = () => {
    return (
        <div classname="main-footer">
            <div classname="container">
                <hr/>
                <div classname="row">
                    <p classname="col">
                     &copy;{new Date().getFullYear()} Shyft, Inc.All rights reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Footer;