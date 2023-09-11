import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Root from "./routes/root/Root.jsx";
import AddMovie from "./routes/add_movie/AddMovie.jsx";
import "@fontsource/roboto";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "add-movie/",
        element: <AddMovie />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </React.StrictMode>
);
