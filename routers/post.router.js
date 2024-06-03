const { Router } = require("express");
const postRouter = Router();

const { isLogin } = require("../middlewares/userAuth.middleware");
const {
  addPost,
  likePost,
  editPost,
  editPostPage,
  deletePost,
} = require("../controllers/post.controller");

postRouter.post("/addPost", isLogin, addPost);
postRouter.get("/likePost/:id", isLogin, likePost);
postRouter.get("/editPost/:id", isLogin, editPost);
postRouter.get("/deletePost/:id", isLogin, deletePost);

postRouter.post("/editPost/:id", isLogin, editPostPage);

module.exports = { postRouter };
