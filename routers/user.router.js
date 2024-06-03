const { Router } = require("express");
const router = Router();

const { isLogin } = require("../middlewares/userAuth.middleware");
const { userInput } = require("../middlewares/userInput.middleware");

const { imageUpload } = require("../middlewares/fileUpload.middleware");
const {
  addUser,
  addUserPage,
  login,
  loginAuth,
  logout,
  edituser,
  editUserPage,
  allBlogs,
  myblogs,
  deleteuser,
} = require("../controllers/user.controller");
const { addPost } = require("../controllers/post.controller");

router.get("/addUser", addUser);
router.get("/login", login);
router.get("/logout", logout);
router.get("/edituser", isLogin, edituser);
router.get("/", isLogin, allBlogs);
router.get("/myblogs", isLogin, myblogs);
router.get("/deleteUser", isLogin, deleteuser);

router.post("/addUser", imageUpload, userInput, addUserPage);
router.post("/login", loginAuth);
router.post("/editeduser", isLogin, imageUpload, userInput, editUserPage);

router.post("/addPost", isLogin, addPost);

module.exports = { router };
