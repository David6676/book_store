const AccountController = require("../controllers/AccountController");
const Router = require("express").Router();

Router.delete("/deleteUser/:id",AccountController.deleteUser);

module.exports = Router;