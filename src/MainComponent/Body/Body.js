import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../Auth/Auth";
import Logout from "../Auth/Logout";
import { connect } from "react-redux";
import "./WallpaperList.css";

const mapStateToProps = state => {
    return {
        loggedIn: state.LoggedIn,
    }
}

const Body = (props) => {
    let routes = null;
    if (props.loggedIn) {
        routes = (
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>)
    } else {
        routes = (
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        )
    }
    return (
        <div>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/logout" element={<Logout />} />
            </Routes> */}
            {routes}

        </div>

    )
}
export default connect(mapStateToProps)(Body);