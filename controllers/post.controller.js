const postModel = require("../models/post.model");

const addPost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = postModel.create({ content, user: req.user._id });

    res.redirect("/myblogs");
  } catch (error) {
    console.log(error);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await postModel.findOne({ _id: req.params.id }).populate("user");

    if (post.likes.indexOf(req.user._id) === -1) {
      post.likes.push(req.user._id);
    } else {
      post.likes.splice(post.likes.indexOf(req.user._id), 1);
    }

    await post.save();
    if (req.query.mypath == "myblogs") {
      res.redirect("/myblogs");
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (req, res) => {
  try {
    const post = await postModel.findOne({ _id: req.params.id }).populate("user");
    res.render("edit", { post });
  } catch (error) {
    console.log(error);
  }
};

const editPostPage = async (req, res) => {
  try {
    const { content } = req.body;

    await postModel.findOneAndUpdate({ _id: req.params.id }, { content });
    res.redirect("/myblogs");
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postModel.findById(postId);

    if (post.user.valueOf() != req.user.id) {
      return res.status(403).send("Unauthorized");
    }

    await postModel.findByIdAndDelete(postId);
    res.redirect("/myblogs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { addPost, likePost, editPost, editPostPage, deletePost };
