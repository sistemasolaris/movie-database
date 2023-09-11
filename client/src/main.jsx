import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Root from "./routes/root/Root.jsx";
import AddMovie from "./routes/add_movie/AddMovie.jsx";
import EditMovie from "./routes/edit_movie/EditMovie.jsx";
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
    {
        path: "edit-movie/",
        element: <EditMovie />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </React.StrictMode>
);
