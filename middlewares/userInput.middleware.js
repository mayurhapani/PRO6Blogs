const userInput = (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;
    const image = req.file.path;

    if (name && username && password && email && image) {
      next();
    } else {
      console.log("please fill all the inputs");
      res.redirect("/login");
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { userInput };
