const express = require("express");
const register = require("../../controllers/users/register");
const login = require("../../controllers/users/login");
const logout = require("../../controllers/users/logout");
const current = require("../../controllers/users/current");
const change = require("../../controllers/users/change");
const validateUser = require("../../helpers/userJoiValidator");
const validateToken = require("../../middlewares/validateToken");

// const {} = require("../../controllers");

const router = express.Router();

router.post("/register", validateUser, register);
router.get("/login", validateUser, login);
router.post("/logout", validateToken, logout);
router.get("/current", validateToken, current);
router.patch("/", validateToken, change);

module.exports = router;
