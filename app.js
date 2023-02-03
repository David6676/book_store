require('dotenv').config()

const express = require("express");

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController")
const authenticateToken = require("./middlewares/authenticateToken");
const upload = require("./middlewares/upload")
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + "/static"))


//////////  Post methods //////////
app.post("/", UserController.addUser);
app.post("/login", AuthController.login);
app.post("/addBook",/* upload.single("photo"),*/ BookController.addBook)
//////////  Post methods //////////


//////////  Put methods //////////
app.put("/updateBook/:id", BookController.updateBook)
//////////  Put methods //////////


//////////  Delete methods //////////
app.delete("/deleteBook/:id", BookController.deleteBook)
app.delete("/deleteUser/:id", UserController.deleteUser)
//////////  Delete methods //////////


//////////  Get methods //////////
app.get("/books", BookController.getBooks)
app.get("/users", UserController.getUsers)
//////////  Get methods //////////



app.listen(process.env.PORT, () => console.log("Listening to the port " + process.env.PORT));