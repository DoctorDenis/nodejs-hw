const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
    trim: true,
    match: [
      /^[A-Za-z0-9]*([._]*[A-Za-z0-9])*@[A-Za-z0-9]{4,}\.\w{2,3}$/g,
      "The email you provided is not valid",
    ],
    required: [true, "Please provide email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide the phone number"],
    trim: true,
    match: [
      /^0[0-9][0-9][ -]?\d\d[ -]?\d[ -]?\d\d[ -]?\d\d$/g,
      "The phone {VALUE} is not valid. Valid example: 095 111 11 11",
    ],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
});

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = { contactSchema, contactModel };
