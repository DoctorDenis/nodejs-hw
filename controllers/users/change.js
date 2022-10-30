const userService = require("../../services/userService");

async function change(req, res, next) {
  const { user, body } = req;

  try {
    const result = await userService.updateSuscription(user._id, body);
    const { email, subscription } = result;
    res.status(200).json({ email, subscription });
  } catch (error) {
    console.log(error);
    error.code = 400;
    next(error);
  }
}

module.exports = change;
