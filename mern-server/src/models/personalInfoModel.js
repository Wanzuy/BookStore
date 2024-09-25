// mern-server/src/models/personalInfoModel.js
import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
    birthday: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
        default: '',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);

export default PersonalInfo;