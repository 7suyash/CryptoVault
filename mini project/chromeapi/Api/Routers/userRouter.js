const express = require("express");
const authController = require("../Controllers/authController"); //write the name path
const router = express.Router();
router.get("/signup", authController.signup);
router.post("/createtoken", authController.login);
module.exports = router;
