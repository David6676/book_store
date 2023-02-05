require('dotenv').config();

const express = require("express");

const authenticateToken = require("./middlewares/authenticateToken");

const AuthRouter = require("./routers/auth.router");
const UserRouter = require("./routers/user.router");
const BookRouter = require("./routers/book.router");
const AccountRouter = require("./routers/account.router")
const app = express();


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + "/static"))


//////////  Post methods //////////
app.use("/auth", AuthRouter);
app.use("/auth", AuthRouter);
app.use("/books", BookRouter, authenticateToken);
//////////  Post methods //////////


//////////  Put methods //////////
app.use("/books", BookRouter, authenticateToken);
//////////  Put methods //////////


//////////  Delete methods //////////
app.use("/books", BookRouter, authenticateToken);
app.use("/users", AccountRouter, authenticateToken);
//////////  Delete methods //////////


//////////  Get methods //////////
app.use("/books", BookRouter);
app.use("/users", UserRouter);
//////////  Get methods //////////


app.listen(process.env.PORT, () => console.log("Listening to the port " + process.env.PORT));