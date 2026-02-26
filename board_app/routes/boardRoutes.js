const router = require("express").Router();
const ctrl = require("../controllers/boardController");

router.get("/", ctrl.list);
router.get("/:id", ctrl.detail);
//create()
router.post("/", ctrl.create);

module.exports = router;
