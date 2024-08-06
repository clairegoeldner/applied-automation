import { Outlet } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import Footer from "../../layout/Footer";
import AdminLogin from "../AdminLogin";

export default function AdminLayout() {
    if (isAuthenticated()) {
        return (
            <>
                <AdminNavBar />
                <div className="body">
                    <Outlet />
                </div>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <AdminNavBar />
                <div className="body">
                    <AdminLogin />
                </div>
                <Footer />
            </>
        )
    }
}

function isAuthenticated() {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const parsedUser = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            if (parsedUser && new Date(parsedUser.exp * 1000) > new Date()) {
                return true;
            } else {
                localStorage.removeItem('token');
                return false;
            }
        } catch (error) {
            console.error('Invalid token:', error);
            localStorage.removeItem('token');
            return false;
        }
    } else {
        return false;
    }
}