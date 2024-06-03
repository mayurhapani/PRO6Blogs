const express = require("express");
const app = express();
port = 8001;

const db = require("./config/database");
const { router } = require("./routers/user.router");
const { postRouter } = require("./routers/post.router");

const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);
app.use(postRouter);



// app.get("/delete/:id", isLogedin, async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const userEmail = req.user.email;

//     const post = await postModel.findById(postId);
//     if (!post) {
//       return res.status(404).send("Post not found");
//     }

//     if (post.userId != req.user._id) {
//       return res.status(403).send("Unauthorized");
//     }

//     const user = await userModel.findOne({ email: userEmail });
//     const postIndex = user.posts.indexOf(postId);
//     if (postIndex > -1) {
//       user.posts.splice(postIndex, 1);
//     } else {
//       return res.status(404).send("Post not found in user's posts");
//     }

//     await postModel.findByIdAndDelete(postId);
//     await user.save();

//     res.redirect("/blogs");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.get("/editPost/:id", isLogedin, async (req, res) => {
//   const post = await postModel.findOne({ _id: req.params.id }).populate("user");
//   res.render("edit", { post });
// });

// app.post("/post", isLogedin, async (req, res) => {
//   try {
//     const { content } = req.body;
//     const user = await userModel.findOne({ email: req.user.email });

//     let post = await postModel.create({
//       user: user._id,
//       content,
//     });

//     user.posts.push(post._id);
//     await user.save();

//     res.redirect("/blogs");
//   } catch (err) {
//     console.log(err);
//   }
// });
// app.post("/editPost/:id", isLogedin, async (req, res) => {
//   try {
//     const post = await postModel.findOneAndUpdate(
//       { _id: req.params.id },
//       { content: req.body.content }
//     );

//     res.redirect("/blogs");
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(port, (err) => {
  db();
  if (!err) console.log("Server is running on http://localhost:" + port);
});
