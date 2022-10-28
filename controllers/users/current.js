const userService = require("../../services/userService");
// const jwt = require("jsonwebtoken");

async function current(req, res, next) {
  try {
    const result = await userService.getUserInfoById(req.user._id);
    const { email, subscription } = result;
    res.status(200).json({ email, subscription });
  } catch (error) {
    error.code = 401;
    error.message = "Not authorized";
    next(error);
  }
}

module.exports = current;
