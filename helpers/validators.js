const mongoose = require("mongoose");
const { contactModel } = require("../models/contact");

const idValidator = (req, res, next) => {
  const id = req.params.contactId;
  if (!id) {
    next();
  } else {
    mongoose.isValidObjectId(id)
      ? next()
      : res.status(400).json({ message: "Wrong id format" });
  }
};

const bodyValidator = async (body) => {
  return await contactModel.validate(body);
};

module.exports = { idValidator, bodyValidator };
