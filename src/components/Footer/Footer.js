import React from "react";
import logo from "../../images/white logo.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <img src={logo} alt={logo} />
            <p> © 2020 kasa, All rights reserved</p>
        </footer>
    )
}

export default Footer;