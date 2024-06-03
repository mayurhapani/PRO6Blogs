const postModel = require("../models/post.model");

const addPost = async (req, res) => {
  const { content } = req.body;

  postModel.create({ content });
};

module.exports = { addPost };
