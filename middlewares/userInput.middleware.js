const userInput = async (req, res, next) => {
  try {
    console.log(req.file);
    const { name, username, email, password } = req.body;

    if (name && username && password && email) {
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
