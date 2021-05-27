const router = require("express").Router();
const commentController = require("../controllers/comment.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/comment", authMiddleware, commentController.createComment);

module.exports = router;
