const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().allow(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{4,}$/)
    .min(4)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .default("starter"),
  token: Joi.string(),
}).messages({
  "any.required": "You forgot to provide {{#label}}",
  "string.pattern.base":
    "{{#label}} with value {:[.]} fails to match the required pattern. Password length must be more than 3 chars",
});

module.exports = validateUser = (req, res, next) => {
  // console.log(req.headers);
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json({ validation_error: error.message });
  } else {
    next();
  }
};
