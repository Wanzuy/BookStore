import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect to MongoDB successfully");
    } catch (error) {
        console.log("Error connection:", error);
    }
};

export default connectToMongoDB;
