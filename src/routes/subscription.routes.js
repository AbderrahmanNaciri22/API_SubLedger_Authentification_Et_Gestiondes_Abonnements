const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const authAdminVerify = require("../middlewares/authAdminVerify")
const controller = require("../controllers/subscription.controller");

router.get("/",authMiddleware,authAdminVerify,controller.getAll)
router.post("/",authMiddleware,controller.createSubscription)
router.get("/mysubscription",authMiddleware,controller.findSubscription
)



module.exports = router;