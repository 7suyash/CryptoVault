const express = require("express");
const authController = require("../Controllers/authController"); //write the name path
const router = express.Router();
router.get("/allaccount", authController.authController.allAccount);
module.exports = router;
