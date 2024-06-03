const postModel = require("../models/post.model");

const addPost = async (req, res) => {
  const { content } = req.body;

  postModel.create({ content, user: req.user._id });
  res.redirect("/myblogs");
};

module.exports = { addPost };
