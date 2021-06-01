const router = require("express").Router();
const messageController = require("../controllers/message.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/message", authMiddleware, messageController.createMessage);
router.get(
  "/conversations",
  authMiddleware,
  messageController.getConversations
);
router.get("/message/:id", authMiddleware, messageController.getMessages);

module.exports = router;
