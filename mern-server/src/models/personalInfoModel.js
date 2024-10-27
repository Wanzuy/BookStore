// mern-server/src/models/personalInfoModel.js
import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
    birthday: {
        type: Date,
        default: Date.now,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other',
    },
    phoneNumber: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);

export default PersonalInfo;