import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = () => {
        const user = localStorage.getItem("user");
        return user !== null && user !== "null";
    };

    return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;