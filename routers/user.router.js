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

router.get("/", isLogin, myBlogs);
router.get("/addUser", addUser);
router.get("/login", login);
router.get("/logout", logout);

router.post("/addUser", userInput, addUserPage);
router.post("/login", loginAuth);

module.exports = { router };
