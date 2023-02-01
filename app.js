require('dotenv').config()

const express = require("express");

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController")
const authenticateToken = require("./middlewares/authenticateToken")
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//////////  Post methods //////////

app.post("/", UserController.addUser);
app.post("/login", AuthController.login);
app.post("/addBook", BookController.addBook)
app.post("/updateBook/:id", BookController.updateBook)

//////////  Post methods //////////



//////////  Get methods //////////
app.get("/deleteBook/:id", BookController.deleteBook)
app.get("books", BookController.getBooks)
app.get("/users", UserController.getUsers)

//////////  Get methods //////////


app.listen(process.env.PORT, () => console.log("Listening to the port " + process.env.PORT));