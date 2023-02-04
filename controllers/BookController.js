const { Book } = require("../models");

class BookController {
    static addBook = async (req, res) => {
        let data = req.body
        console.log(data);

        let book = await Book.findOne({
            where: {
                name: data.name
            }
        })
        if (book) {
            return res.status(409).send(`A book with this ${data.name} name already exists`)
        } else {
            await Book.create(data)
            res.status(201).send("success")
        }
    }

    static deleteBook = async (req, res) => {
        let { id } = req.params
        await Book.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send("Success delete")
    }

    static updateBook = async (req, res) => {
        let data = req.body
        console.log(data);
        await Book.update({
            name: data.name,
            genre: data.genre,
            price: data.price,
            description: data.description,
            author: data.author,
            url: data.url,
            userId: data.user_id
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