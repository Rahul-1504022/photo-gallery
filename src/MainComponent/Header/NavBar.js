import React from "react";
import Logo from '../../assets/logo.jpeg';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}


const NavBar = (props) => {
    let isAuthLink = null;
    if (props.token) {
        isAuthLink = (
            <li>
                <NavLink to="/logout">Logout</NavLink>
            </li>

        )
    } else {
        isAuthLink = (
            <li>
                <NavLink to="/auth">Login</NavLink>
            </li>
        )
    }
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
                {isAuthLink}
            </ul>
        </div>
    )
}


export default connect(mapStateToProps)(NavBar);