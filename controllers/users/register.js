const userService = require("../../services/userService");
const generateToken = require("../../middlewares/generateToken");

async function register(req, res, next) {
  try {
    const result = await userService.registerUser(req.body);
    const token = generateToken(result);

    res.status(201).json({
      message: "User successfully created",
      user: { email: result.email, subscription: result.subscription },
      token,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      error.code = 409;
      error.message = `Email in use`;
    } else {
      error.message = "Cannot register user";
    }
    next(error);
  }
}

module.exports = register;
