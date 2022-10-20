const { updateStatusContact } = require("../services/contactService");

async function toggleContact(req, res, next) {
  const id = req.params.contactId;
  const contact = req.body;
  try {
    const result = await updateStatusContact(id, contact);
    res.status(200).json({ data: result });
  } catch (error) {
    const code = error.name === "ValidationError" ? 400 : 404;
    res.status(code).json({ error: error.message });
  }
}
//
module.exports = toggleContact;
