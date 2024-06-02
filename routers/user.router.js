const { Router } = require("express");
const router = Router();

const { isLogin } = require("../middlewares/userAuth.middleware");
const { userInput } = require("../middlewares/userInput.middleware");

const {
  myBlogs,
  addUser,
  addUserPage,
  login,
  loginAuth,
  logout,
} = require("../controllers/user.controller");
const { imageUpload } = require("../middlewares/fileUpload.middleware");

router.get("/", isLogin, myBlogs);
router.get("/addUser", addUser);
router.get("/login", login);
router.get("/logout", logout);

router.post("/addUser", imageUpload, userInput, addUserPage);
router.post("/login", loginAuth);

module.exports = { router };
