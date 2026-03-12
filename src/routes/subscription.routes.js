const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const authAdminVerify = require("../middlewares/authAdminVerify")
const controller = require("../controllers/subscription.controller");
const verifySubscriptionInputWithJoi = require("../validations/verifySubscriptionInputWithJoi")



router.get("/",authMiddleware,authAdminVerify,controller.getAll)
router.post("/",verifySubscriptionInputWithJoi,authMiddleware,controller.createSubscription)
router.get("/mysubscription",authMiddleware,controller.findSubscriptionBytoken)
router.get("/mysubscription/:id",authMiddleware,controller.findSubscriptionBytokenDetails)
router.delete("/mysubscription/:id",authMiddleware,controller.deleteSubscription)
router.put("/mysubscription/:id",authMiddleware,controller.updateSubscription)

router.get("/admin/:id",authMiddleware,authAdminVerify,controller.findUserSubscriptionById)



module.exports = router;