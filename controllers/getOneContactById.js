const { getContactById } = require("../services/contactService");

async function getContact(req, res, next) {
  const id = req.params.contactId;
  try {
    const contact = await getContactById(id);
    res.json({ data: contact });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = getContact;
