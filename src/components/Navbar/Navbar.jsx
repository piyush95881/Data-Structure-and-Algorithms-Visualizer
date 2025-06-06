import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>DSA Visualizer</div>
            <div className={classes.links}>
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="/contact" className={classes.link}>Contact</Link>
                <Link to="/resume" className={classes.link}>Resume</Link>
            </div>
        </nav>
    );
};

export default Navbar;
