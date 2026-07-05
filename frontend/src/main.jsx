import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </TaskProvider>
  </AuthProvider>
</BrowserRouter>
);