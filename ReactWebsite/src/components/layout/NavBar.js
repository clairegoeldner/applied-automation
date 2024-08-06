import { Link } from "react-router-dom"
import '../../styles/NavBar.css';

export default function NavBar() {
    return (
        <div className="nav">
            <div className="row header">
                <div className="logo">
                    LOGO
                </div>
                <h1>Applied Automation Training & Equipment</h1>
            </div>
            <nav className="row">
                <ul>
                    <li><Link to="/" className="button">Home</Link></li>
                    <li><Link to="/services" className="button">Services</Link></li>
                    <li><Link to="/about" className="button">About</Link></li>
                    <li><Link to="/contact" className="button">Contact</Link></li>
                    <li><Link to="/more" className="button">...</Link></li>
                </ul>
            </nav>
        </div>
    );
}