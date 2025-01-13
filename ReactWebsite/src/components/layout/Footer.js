import React from "react";
import "../../styles/Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="row">
                <p>Copyright &copy; { new Date().getFullYear() } Applied Automation Training & Equipment</p>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    );
}