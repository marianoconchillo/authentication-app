import { Router } from "express";
import { getMe, loginUser, registerUser } from "../controllers/users";
import requireAuth from "../middleware/authMiddleware";

const router = Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(requireAuth, getMe);

export default router;
