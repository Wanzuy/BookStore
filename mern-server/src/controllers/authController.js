import User from "../models/userModel.js";
import PersonalInfo from "../models/personalInfoModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';

// Tạo JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

// Đăng ký người dùng
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role, birthday, gender, phoneNumber, address } = req.body;

    // Kiểm tra xem email đã tồn tại hay chưa
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: 'Địa chỉ email đã tồn tại !' });
        return;
    }

    // Tạo người dùng mới
    const user = await User.create({
        name,
        email,
        password,
        role: role || 'user', // Default to 'user' if role is not provided
    });

    if (user) {
        // Tạo thông tin cá nhân mới
        const personalInfo = await PersonalInfo.create({
            birthday,
            gender,
            phoneNumber,
            address,
            user: user._id,
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
            personalInfo,
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
});

// Đăng nhập người dùng
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id); // Tạo token
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
            }).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token, // Trả thêm token
            });
        } else {
            res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};