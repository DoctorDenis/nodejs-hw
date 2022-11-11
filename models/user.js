const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: {
    type: String,
    required: [true, "Provide password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: {
      values: ["starter", "pro", "business"],
      message:
        '{VALUE} is not valid value for subscription. Only "starter", "pro", "business" are supported',
    },
    default: "starter",
  },
  token: String,
  avatarURL: String,
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel, userSchema };
