const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  signup_token: {
    type: String,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
