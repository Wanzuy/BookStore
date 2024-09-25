import User from "../models/userModel.js";
import PersonalInfo from "../models/personalInfoModel.js";
import asyncHandler from 'express-async-handler';

// Lấy thông tin người dùng
export const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id);
    const personalInfo = await PersonalInfo.findOne({ user: req.user.id });

    if (user && personalInfo) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            personalInfo,
        });
    } else {
        res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
};

// Cập nhật thông tin người dùng
export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        const personalInfo = await PersonalInfo.findOne({ user: req.user._id });
        if (personalInfo) {
            personalInfo.birthday = req.body.birthday || personalInfo.birthday;
            personalInfo.gender = req.body.gender || personalInfo.gender;
            personalInfo.phoneNumber = req.body.phoneNumber || personalInfo.phoneNumber;
            personalInfo.address = req.body.address || personalInfo.address;

            await personalInfo.save();
        }

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            token: generateToken(updatedUser._id),
            personalInfo,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// Thay đổi vai trò người dùng
export const changeUserRole = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.role = req.body.role || user.role;
        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// Thay đổi mật khẩu người dùng
export const changeUserPassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user && (await user.matchPassword(req.body.currentPassword))) {
        user.password = req.body.newPassword;
        await user.save();
        res.json({ message: 'Password updated successfully' });
    } else {
        res.status(400);
        throw new Error('Current password is incorrect');
    }
});