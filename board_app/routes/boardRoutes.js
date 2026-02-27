const router = require("express").Router();
const ctrl = require("../controllers/boardController");
const mid = require("../middleware/auth");

router.get("/", ctrl.list);
router.get("/:id", ctrl.detail);
//create()
router.post("/", mid.verifyToken, ctrl.create);
router.delete("/:id", mid.verifyToken, ctrl.remove);

module.exports = router;
