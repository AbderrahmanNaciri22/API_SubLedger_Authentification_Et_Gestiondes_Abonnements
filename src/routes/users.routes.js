const express = require("express");
const router = express.Router();
const verifyAdminRoleBeforeAjpute_lessthan_2 = require("../middlewares/verifyAdminRoleBeforeAjpute_lessthan_2")
const verifyUserInputWithJoi = require("../validations/verifyUserInputWithJoi")
const authMiddleware = require("../middlewares/authMiddleware")
const authAdminVerify = require("../middlewares/authAdminVerify")
const controller = require("../controllers/user.controller");

router.post("/",verifyAdminRoleBeforeAjpute_lessthan_2,verifyUserInputWithJoi, controller.ajoute);
router.get("/admin",authMiddleware,authAdminVerify,controller.findAll)
router.get("/:id",authMiddleware,authAdminVerify,controller.findUser);
router.delete("/:id",authMiddleware,authAdminVerify,controller.delete)
router.put("/:id",authMiddleware,controller.update)
// router.post("/login",controller.login)

module.exports = router;