const userService = require("../../services/userService");

async function verify(req, res, next) {
  const { verificationToken } = req.params;
  if (!verificationToken) {
    const error = new Error("Verification token is missing");
    error.code = 400;
    next(code);
  }

  try {
    const result = await userService.verifyEmail(verificationToken);
    res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    error.code = 404;
    next(error);
  }
}

module.exports = verify;
