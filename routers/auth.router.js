const Router = require("express").Router();
const AuthController = require("../controllers/AuthController");

Router.post("/sign-in", AuthController.SignIn);
Router.post("/sign-up", AuthController.SignUp);

module.exports = Router;