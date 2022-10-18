import React from "react";
import Logo from '../../assets/logo.jpeg';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = props => {
    return (
        <div className="navlist">
            <a href="#"><img src={Logo} width="100px" height="auto" alt="Logo" /></a>
            <p className="navlist-text">Best Wallpaper</p>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    {/* <a href="#">Home</a> */}
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                    {/* <a href="about">About</a> */}
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                    {/* <a href="#">Contact</a> */}
                </li>
                <li>
                    <NavLink to="/">Logout</NavLink>
                    {/* <a href="#">Logout</a> */}
                </li>
            </ul>
        </div>
    )
}

export default NavBar;