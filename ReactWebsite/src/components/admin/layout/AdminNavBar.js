import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/NavBar.css";
import "../../../styles/AdminNavBar.css";

export default function AdminNavBar() {
    return (
        <div className="nav">
            <div className="row header">
                <div className="logo">
                    LOGO
                </div>
                <h1>Applied Automation Training & Equipment</h1>
            </div>
            <nav className="admin row">
                <ul>
                    <li><Link to="/admin/home" className="button">Home</Link></li>
                    <li><Link to="/admin/logout" className="button">Log Out</Link> </li>
                </ul>
            </nav>
        </div>
    );
}