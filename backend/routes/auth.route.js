import express from "express";
import {
  forgotPassword,
  login,
  logout,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";

const router = express.Router();

//Routing but using another file called auth.controller.js
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
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
