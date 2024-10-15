import axios from "../config/axios";

const token = localStorage.getItem("token");

// lấy thông tin người dùng
export const getUserProfile = async () => {
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await axios.get("/users/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// cập nhật thông tin người dùng
export const updateUserProfile = async (userData) => {
    if (!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.put("/users/profile", userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
