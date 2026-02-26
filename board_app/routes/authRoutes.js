const router = require("express").Router();
const ctrl = require("../controllers/authController");

router.post("/", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;
