import React from "react";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

import "./WallpaperList.css";

const Body = props => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>

        </div>

    )
}
export default Body;