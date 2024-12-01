const express = require("express");
const router = express.Router();
const { register, login,profile,logout } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", register);//email, password
router.post("/login", login);//email, password
router.get("/profile", verifyToken, profile); 
router.post("/logout", verifyToken,logout);

module.exports = router;
