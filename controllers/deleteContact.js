const { removeContact } = require("../services/contactService");

async function deleteContact(req, res, next) {
  const id = req.params.contactId;

  try {
    const contact = await removeContact(id);
    res.status(200).json({ message: "contact deleted", data: contact });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = deleteContact;
