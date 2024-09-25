import express from "express";
import {
    getUserProfile,
    updateUserProfile,
    changeUserRole,
    changeUserPassword,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.put("/role/:id", protect, admin, changeUserRole);
router.put("/password", protect, changeUserPassword);

export default router;