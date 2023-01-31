const { Users } = require("../models");
const bcrypt = require("bcrypt");

class UserController {
    static addUser = async (req, res) => {
        let data = req.body;
        data.password = bcrypt.hashSync(data.password, 10);
        await Users.create(data);
        res.status(200).send("success");
    }
    
    static getUsers = async (req, res) => {
        let users = await Users.findAll()
        res.status(200).send({ users });
    }
};

module.exports = UserController;