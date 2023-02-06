const UserController = require("../controllers/UserController");
const Router = require("express").Router();

Router.get("/get-users", UserController.getUsers);

module.exports = Router;