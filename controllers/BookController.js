const { Book } = require("../models");

class BookController {
    static addBook = async (req, res) => {
        let data = req.body
        await Book.create(data)
        res.status(201).send("success")
    }

    static deleteBook = async (req, res) => {
        let id = req.params
        await Book.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send("Success delete")
    }

    static updateBook = async (req, res) => {
        let data = req.body
        await Book.update({
            name: data.name,
            genre: data.genre,
            price: data.price,
            description: data.description,
            author: data.author,
            user_id: data.user_id,
            url: data.url
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("success")
    }

    static getBooks = async (req, res) => {
        let books = await Book.findAll()
        res.status(200).send({ books })
    }
};

module.exports = BookController;