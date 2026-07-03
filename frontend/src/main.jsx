import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
       <AuthProvider>
    <TaskProvider>
        <App />
    </TaskProvider>
</AuthProvider>
    </BrowserRouter>
);