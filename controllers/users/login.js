const userService = require("../../services/userService");
const generateToken = require("../../middlewares/generateToken");

async function login(req, res, next) {
  try {
    const result = await userService.loginUser(req.body);
    const token = generateToken(result);

    res.status(200).json({ token, user: result });
  } catch (error) {
    error.code = 401;
    next(error);
  }
}

module.exports = login;
