const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    typeof: String,
    require: true,
  },
  userName: {
    typeof: String,
    require: true,
  },
  password: {
    typeof: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;