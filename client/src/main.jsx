import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import App from "./routes/root/App.jsx";
import "@fontsource/roboto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <App />
    </React.StrictMode>
);
