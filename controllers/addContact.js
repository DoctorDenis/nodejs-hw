const { addContact } = require("../services/contactService");

async function postContact(req, res, next) {
  const body = req.body;
  try {
    const contact = await addContact(body);
    res.status(201).json({ data: contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = postContact;
