const router = require("express").Router();
const notifyController = require("../controllers/notify.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/notify", authMiddleware, notifyController.createNotify);

router.delete("/notify/:id", authMiddleware, notifyController.removeNotify);

module.exports = router;
