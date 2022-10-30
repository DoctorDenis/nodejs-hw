const { listContacts } = require("../../services/contactService");

async function getAllContacts(req, res, next) {
  let { page, limit, ...rest } = req.query;
  let contacts = await listContacts(rest);

  const start = Number(limit) * (Number(page) - 1);

  contacts =
    page && limit
      ? (contacts = contacts.slice(start, start + limit))
      : contacts;
  res.status(200).json({ data: contacts });
}

module.exports = getAllContacts;
