import React, { createContext, useState } from "react";
import { registerUser, loginUser } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const userInfo = localStorage.getItem("user");
        return userInfo ? JSON.parse(userInfo) : null;
    });


    const createUser = async (name, email, password) => {
        try {
            const data = await registerUser(name, email, password);
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const loginUserHandler = async (email, password) => {
        try {
            const data = await loginUser(email, password);
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("token", data.token);
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.setItem("user", null);
        localStorage.setItem("token", null);
    };

    return (
        <AuthContext.Provider
            value={{ user, createUser, loginUserHandler, logoutUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
