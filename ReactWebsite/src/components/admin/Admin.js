// React
import React from "react";
import { useRoutes } from "react-router-dom";

// Configuration Components
import AdminLayout from "./layout/AdminLayout";
import NotFound from "../NotFound";

// Pages
import AdminHome from "./main/AdminHome";
import AdminLogout from "./AdminLogout";

export default function Admin() {
    return useRoutes([
        {
            path: "",
            element: <AdminLayout />,
            children: [
                { path: "home", element: <AdminHome /> },
                { path: "logout", element: <AdminLogout /> },
                { path: "*", element: <NotFound /> },
            ]
        }
    ]);
}