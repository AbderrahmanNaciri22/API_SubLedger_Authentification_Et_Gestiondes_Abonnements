const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const authAdminVerify = require("../middlewares/authAdminVerify")
const controller = require("../controllers/subscription.controller");

router.get("/",controller.getAll)

module.exports = router;