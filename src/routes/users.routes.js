const express = require("express");
const router = express.Router();
const verifyAdminRoleBeforeAjpute_lessthan_2 = require("../middlewares/verifyAdminRoleBeforeAjpute_lessthan_2")

const controller = require("../controllers/user.controller");

router.post("/",verifyAdminRoleBeforeAjpute_lessthan_2, controller.ajoute);
router.get("/",controller.findAll)
router.get("/:id",controller.findUser);
router.delete("/:id",controller.delete)
router.put("/:id",controller.update)
// router.post("/login",controller.login)

module.exports = router;