const postInput = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (title && content) {
      next();
    } else {
      console.log("please fill all the inputs");

      res.redirect("/myblogs");
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { postInput };
