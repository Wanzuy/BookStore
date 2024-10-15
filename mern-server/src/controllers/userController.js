import User from "../models/userModel.js";
import PersonalInfo from "../models/personalInfoModel.js";
import asyncHandler from "express-async-handler";

// Lấy thông tin người dùng
export const getUserProfile = async (req, res) => {
    const user = req.user;
    const userId = user._id;

    // Kiểm tra xem người dùng có tồn tại không
    if (!user) {
        return res.status(401).json({ error: "Không được phép truy cập!" });
    }

    // Lấy thông tin cá nhân của người dùng
    try {
        const info = await PersonalInfo.findOne({ user: userId }).populate(
            "user",
            "name email role"
        );
        if (!info) {
            return res
                .status(404)
                .json({ error: "Không tìm thấy thông tin cá nhân!" });
        }

        const userInfo = {
            _id: info.user._id,
            name: info.user.name,
            email: info.user.email,
            birthday: info.birthday,
            gender: info.gender,
            phoneNumber: info.phoneNumber,
            address: info.address,
        };

        return res.status(200).json(userInfo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Lỗi máy chủ nội bộ!" });
    }
};

// Cập nhật thông tin người dùng
export const updateUserProfile = asyncHandler(async (req, res) => {
    const { email, address, phoneNumber, fullName, gender } = req.body;

    const user = req.user;
    const userId = user._id.toString();

    if (!user) {
        return res.status(401).json({ error: "Không được phép truy cập!" });
    }

    // Chuẩn bị dữ liệu cập nhật
    const updateData = {
        email,
        address,
        phoneNumber,
        fullName,
        gender,
    };

    // Kiểm tra dữ liệu cập nhật
    const error = validateData(updateData);
    if (error) {
        return res.status(400).json({ error });
    }

    await PersonalInfo.findOneAndUpdate({ user: userId }, updateData, {
        new: true,
    });

    return res.status(200).json({ message: "Cập nhật thông tin thành công!" });
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
        throw new Error("User not found");
    }
});

// Thay đổi mật khẩu người dùng
export const changeUserPassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user && (await user.matchPassword(req.body.currentPassword))) {
        user.password = req.body.newPassword;
        await user.save();
        res.json({ message: "Password updated successfully" });
    } else {
        res.status(400);
        throw new Error("Current password is incorrect");
    }
});

//Xác thực dữ liệu
function validateData(data) {
    const { email, address, phoneNumber, fullName, gender } = data;

    // Kiểm tra giới tính hợp lệ
    const validGenders = ["male", "female", "other"];
    if (!validGenders.includes(gender)) {
        return "Giới tính không hợp lệ!";
    }

    // Kiểm tra số điện thoại hợp lệ
    const regexPhoneNum = /^(03|05|07|08|09)\d{8}$/;
    if (!regexPhoneNum.test(phoneNumber)) {
        return "Số điện thoại không hợp lệ!";
    }

    //kiểm tra bỏ trống trường thông tin
    if (!email || !address || !fullName) {
        return "Vui lòng điền đầy đủ thông tin!";
    }

    if (!moment(birthday, "DD/MM/YYYY", true).isValid()) {
        return "Ngày sinh không hợp lệ!";
    }
    return null;
}
