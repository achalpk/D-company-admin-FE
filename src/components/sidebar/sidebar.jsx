import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

function SideBar(){
    return(
        <div className="sidebar">
            <div className="title-name"><Link to='/'>D-Admin Panel</Link></div>
            <div className="links">
                <Link to='/services' className="link-items">Services</Link>
                <Link to='/welcome' className="link-items">Welcome</Link>
            </div>
        </div>
    )
}

export default SideBar;