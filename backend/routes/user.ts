import { Router } from "express";
import { updateUser, loginUser, registerUser } from "../controllers/users";
import requireAuth from "../middleware/authMiddleware";

const router = Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").patch(requireAuth, updateUser);

export default router;
