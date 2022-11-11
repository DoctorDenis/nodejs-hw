const Joi = require("joi");

module.exports = function validateEmail(req, res, next) {
  const { email } = req.body;

  const schema = Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required field email" });

  const { error, value } = schema.validate(email);
  if (error) {
    error.code = 400;
    next(error);
  } else {
    next();
  }
};
