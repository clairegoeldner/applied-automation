import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
        <>
            <NavBar />
            <div className="body">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}