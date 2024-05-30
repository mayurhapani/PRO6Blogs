const userModel = require("../models/user.model");

const myBlogs = async (req, res) => {
  const user = req.user;
  res.render("index", { user });
};

const addUser = async (req, res) => {
  res.render("signup");
};

const addUserPage = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const image = req.file.path;

    const user = await userModel.findOne({ email });
    if (user)
      return res.status(400).send("User already exist! <br/> Please use other email id......");

    await userModel.create({ name, username, email, password, image });
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  res.render("login");
};

const loginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).send("User Not exist!");

    if (password !== user.password) return res.redirect("/login");

    res.status(200);
    res.cookie("token", user.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};

module.exports = { myBlogs, addUser, addUserPage, login, loginAuth, logout };
