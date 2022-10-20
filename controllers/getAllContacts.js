const { listContacts } = require("../services/contactService");

async function getAllContacts(req, res, next) {
  const contacts = await listContacts();
  res.status(200).json({ data: contacts });
}

module.exports = getAllContacts;
