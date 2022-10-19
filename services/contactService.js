const { contactModel } = require("../models/contact");
const { bodyValidator } = require("../helpers/validators");

// Done
const listContacts = async () => {
  return await contactModel.find({});
};

// Done
const getContactById = async (contactId) => {
  const result = await contactModel.findById(contactId);
  if (result) {
    return result;
  } else {
    throw new Error(`There is no contact with id: ${contactId}`);
  }
};

// Done
const removeContact = async (contactId) => {
  const result = await contactModel.findByIdAndDelete(contactId);
  if (result) {
    return result;
  } else {
    throw new Error(`There is no contact with id: ${contactId}`);
  }
};

// Done
const addContact = async (body) => {
  return await contactModel.create(body);
};

// Done
const updateContact = async (contactId, body) => {
  const result = await contactModel.findByIdAndUpdate(contactId, body, {
    runValidators: true,
  });

  if (result) {
    return result;
  } else {
    throw new Error(`There is no contact with id: ${contactId}`);
  }
};

const updateStatusContact = async (id, contact) => {
  await bodyValidator(contact);

  const result = await contactModel.findByIdAndUpdate(id, contact, {
    runValidators: true,
    new: true,
  });

  if (result) {
    return result;
  } else {
    throw new Error(`There is no contact with id: ${id}`);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
