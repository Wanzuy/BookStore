import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import AuthProvider from "./contects/AuthProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
    duration: 1000,
    delay: 200,
    once: true,
});
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
