const express = require("express");

const {
  addContact,
  deleteContact,
  editContact,
  getAllContacts,
  getOneContactById,
  toggleContact,
} = require("../../controllers");

const router = express.Router();

// Get list of all contacts
router.get("/", getAllContacts);

// Get one particular contact with id = contactId
router.get("/:contactId", getOneContactById);

// Add one contact
router.post("/", addContact);

//  Delete one particular contact with id = contactId
router.delete("/:contactId", deleteContact);

// Edit one particular contact with id = contactId
router.put("/:contactId", editContact);

// Update one particular contact with id = contactId, toggle favorite
router.patch("/:contactId/favorite", toggleContact);

module.exports = router;
