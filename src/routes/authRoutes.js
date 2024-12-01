const express = require("express");
const router = express.Router();
const { register, login,profile,logout } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", verifyToken, profile); 
router.post("/logout", verifyToken,logout);

module.exports = router;
