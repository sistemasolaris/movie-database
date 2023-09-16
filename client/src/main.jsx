import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Navbar from "./Navbar.jsx";
import Root from "./routes/Root.jsx";
import Login from "./routes/Login.jsx";
import AddMovie from "./routes/AddMovie.jsx";
import EditMovie from "./routes/EditMovie.jsx";
import "@fontsource/roboto";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "login/",
        element: <Login />,
    },
    {
        path: "add-movie/",
        element: <AddMovie />,
    },
    {
        path: "edit-movie/",
        element: <EditMovie />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <Navbar />
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
