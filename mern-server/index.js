import express from "express";
import cors from "cors";
import connectToMongoDB from "./src/config/database.js";
import dotenv from "dotenv";
import bookRoutes from "./src/router/bookRoutes.js";
import userRoutes from "./src/router/userRoutes.js";
import authRoutes from "./src/router/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: [
        "http://192.168.1.22:5173",
        "http://localhost:5173",
        "http://172.172.9.154:5173",
        "https://book-store-beta-tawny.vercel.app",
        "http://192.168.43.1:5173",
        "http://172.20.10.11:5173",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Sử dụng các route từ file bookRoutes.js và userRoutes.js
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

connectToMongoDB();

app.listen(port, () => {
    console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});
