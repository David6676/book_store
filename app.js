const express = require("express");
require('dotenv').config()

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const authenticateToken = require("./middlewares/authenticateToken")
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//////////  Post methods //////////

app.post("/", UserController.addUser);
app.post("/login", AuthController.login);

//////////  Post methods //////////


app.listen(process.env.PORT, () => console.log("Start"));