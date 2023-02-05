const Router = require("express").Router();
const BookController = require("../controllers/BookController");
const upload = require("../middlewares/upload");

const uploadData = upload.fields([
    { name: "cover_book" },
    { name: "book_uid" },
]);

Router.post("/add-book",uploadData, BookController.addBook);
Router.put("/updateBook/:id",uploadData, BookController.updateBook);
Router.delete("/deleteBook/:id", BookController.deleteBook);
Router.get("/get-books", BookController.getBooks);

module.exports = Router;