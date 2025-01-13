import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { RefreshTheme } from "./components/main/Themes";

export default function App() {
    useEffect(RefreshTheme, []);

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