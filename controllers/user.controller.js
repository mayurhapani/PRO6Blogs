const userModel = require("../models/user.model");

const allBlogs = async (req, res) => {
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

const edituser = async (req, res) => {
  const user = req.user;
  res.render("edituser", { user });
};

const editUserPage = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const id = req.user._id;
    let image = req.user.image;

    if (req.file) {
      image = req.file.path;
    }
    await userModel.findOneAndUpdate({ _id: id }, { name, username, email, password, image });

    res.redirect("/myblogs");
  } catch (err) {
    console.log(err);
  }
};

const myblogs = async (req, res) => {
  const user = req.user;
  res.render("myblogs", { user });
};

module.exports = {
  allBlogs,
  addUser,
  addUserPage,
  login,
  loginAuth,
  logout,
  myblogs,
  edituser,
  editUserPage,
};
