import React from "react";
import {Link, useLocation} from 'react-router-dom'
import logo from '../../images/LOGO.svg'
import "./Header.scss"

function Header () {
    const location = useLocation();
    const currentLocation = location.pathname.substring(1);
    return (
        <header className="header">
            <img src={logo} alt='logo' className="logo"/>
            <nav className="nav-links">
                <Link to='/' className={currentLocation === "" ? `isActive` : 'link'}>Accueil</Link>
                <Link to='/About' className={currentLocation === "About" ? `isActive` : 'link'}>À propos</Link>
            </nav>
        </header>
    )
}

export default Header;