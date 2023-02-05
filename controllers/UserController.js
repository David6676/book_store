const { Users } = require("../models");

class UserController {

    static getUsers = async (req, res) => {
        let users = await Users.findAll();
        res.status(200).send({ users });
    };
};

module.exports = UserController;