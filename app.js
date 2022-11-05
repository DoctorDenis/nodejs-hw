const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const { idValidator } = require("./helpers/validators");

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Validator for id in request
app.use(idValidator);

app.use("/users", usersRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  const { code = 500 } = err;
  res.status(code).json({ message: err.message });
});

module.exports = { app };
