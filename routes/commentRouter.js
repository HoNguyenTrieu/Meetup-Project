const router = require("express").Router();
const commentController = require("../controllers/comment.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/comment", authMiddleware, commentController.createComment);
router.patch("/comment/:id", authMiddleware, commentController.updateComment);

module.exports = router;
