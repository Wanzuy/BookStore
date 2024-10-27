import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user !== "null";
};

const hasRole = (role) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.role === role;
};

const ProtectedAdminRoute = ({ element: Component, role, ...rest }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/sign-in" />;
    } else if (role && !hasRole(role)) {
        return <Navigate to="/" />;
    } else {
        return <Component {...rest} />;
    }
};

export default ProtectedAdminRoute;