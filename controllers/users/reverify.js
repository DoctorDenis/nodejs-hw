const userService = require("../../services/userService");
const sendEmail = require("../../helpers/sendEmail");
const generateEmailBody = require("../../helpers/generateEmailBody");

async function reverify(req, res, next) {
  const { email } = req.body;

  try {
    const user = await userService.getuserByEmail(email);

    const emailBody = generateEmailBody(user);
    sendEmail(emailBody);

    res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
}

module.exports = reverify;
