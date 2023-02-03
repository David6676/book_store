const { Users } = require("../models");
const bcrypt = require("bcrypt");

class UserController {

    static getUsers = async (req, res) => {
        let users = await Users.findAll()
        res.status(200).send({ users });
    }

};

module.exports = UserController;