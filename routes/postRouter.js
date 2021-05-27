const router = require("express").Router();
const postController = require("../controllers/post.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.route("/posts").post(authMiddleware, postController.createPost);
router.route("/posts").get(authMiddleware, postController.getPosts);

router.route("/post/:id").patch(authMiddleware, postController.updatePost);

router.patch("/post/:id/like", authMiddleware, postController.likePost);
router.patch("/post/:id/unlike", authMiddleware, postController.unLikePost);

module.exports = router;
