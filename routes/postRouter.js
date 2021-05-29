const router = require("express").Router();
const postController = require("../controllers/post.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.route("/posts").post(authMiddleware, postController.createPost);
router.route("/posts").get(authMiddleware, postController.getPosts);

router.route("/post/:id").patch(authMiddleware, postController.updatePost);
router.route("/post/:id").get(authMiddleware, postController.getPost);
router.route("/post/:id").delete(authMiddleware, postController.deletePost);

router.patch("/post/:id/like", authMiddleware, postController.likePost);

router.patch("/post/:id/unlike", authMiddleware, postController.unLikePost);

router.get("/user_posts/:id", authMiddleware, postController.getUserPosts);

router.get("/post_discover", authMiddleware, postController.getPostsDicover);

module.exports = router;
