import { Link } from "react-router-dom";

export default function AdminLogout() {
    localStorage.removeItem("token");

    return (
        <>
            <h1>You have been logged out successfully.</h1>
            <div className="inset-box column">
                <h2>Log back in or leave the admin section.</h2>
                <Link to="/admin/home" className="button">Login</Link>
                <Link to="/" className="button">Home</Link>
            </div>
        </>
    )
}