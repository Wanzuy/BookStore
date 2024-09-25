import axios from "../config/axios"; 

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post(
            "/auth/register",
            { name, email, password }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Đăng ký thất bại");
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            "/auth/login",
            { email, password }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
    }
};

