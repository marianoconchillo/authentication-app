import { Router } from "express";
import { registerUser } from "../controllers/users";

const router = Router();

router.route("/").post(registerUser);

export default router;
