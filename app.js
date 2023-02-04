require('dotenv').config()

const express = require("express");

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController")
const AccountController = require("./controllers/AccountController")
const authenticateToken = require("./middlewares/authenticateToken");
const upload = require("./middlewares/upload")
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + "/static"))


//////////  Post methods //////////
app.post("/auth/sign-up", AuthController.SignUp);
app.post("/auth/sign-in", AuthController.SignIn);
app.post("/addBook", /*authenticateToken,  upload.single("photo"),*/ BookController.addBook)
//////////  Post methods //////////


//////////  Put methods //////////
app.put("/updateBook/:id", /*authenticateToken,*/ BookController.updateBook)
//////////  Put methods //////////


//////////  Delete methods //////////
app.delete("/deleteBook/:id", /*authenticateToken,*/ BookController.deleteBook)
app.delete("/deleteUser/:id", /*authenticateToken,*/ AccountController.deleteUser)
//////////  Delete methods //////////


//////////  Get methods //////////
app.get("/books", BookController.getBooks)
app.get("/users", UserController.getUsers)
//////////  Get methods //////////



app.listen(process.env.PORT, () => console.log("Listening to the port " + process.env.PORT));