const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://hapanimayur:Love1224@cluster0.iyurgqh.mongodb.net/PRO6Blog"
  );
  console.log("Database Connected Successfully");
};

module.exports = db;
