const router = require("express").Router();
const postController = require("../controllers/post.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.route("/posts").post(authMiddleware, postController.createPost);

module.exports = router;
