const express = require("express");
const register = require("../../controllers/users/register");
const login = require("../../controllers/users/login");
const logout = require("../../controllers/users/logout");
const current = require("../../controllers/users/current");
const change = require("../../controllers/users/change");
const verify = require("../../controllers/users/verify");
const reverify = require("../../controllers/users/reverify");
const multer = require("multer");
const validateEmail = require("../../middlewares/validateEmail");
const path = require("path");
const changeAvatar = require("../../controllers/users/changeAvatar");
const validateUser = require("../../helpers/userJoiValidator");
const validateToken = require("../../middlewares/validateToken");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp/");
  },
  filename: function (req, file, cb) {
    const name = req.user.email + "_avatar" + path.extname(file.originalname);
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

router.post("/register", validateUser, register);
router.get("/login", validateUser, login);
router.post("/logout", validateToken, logout);
router.get("/current", validateToken, current);
router.patch("/avatars", validateToken, upload.single("avatar"), changeAvatar);
router.patch("/", validateToken, change);
router.get("/verify/:verificationToken", verify);
router.post("/verify", validateEmail, reverify);

module.exports = router;
