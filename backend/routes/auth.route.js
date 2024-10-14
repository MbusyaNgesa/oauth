import express from "express";
import {
  checkAuth,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
//Routing but using another file called auth.controller.js
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
export default router;

//One way of Routing using same file
// router.get("/signup", (req, res) => {
//   res.send("Signup Route");
// });

// router.get("/login", (req, res) => {
//   res.send("Login Route");
// });

// router.get("/logout", (req, res) => {
//   res.send("Logout Route");
// });
