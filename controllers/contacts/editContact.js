const { updateContact } = require("../../services/contactService");

async function editContact(req, res, next) {
  const id = req.params.contactId;
  const contact = req.body;
  try {
    const result = await updateContact(id, contact);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = editContact;
