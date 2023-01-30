const { Users } = require("../models");
const bcrypt = require("bcrypt");

class UserController {
    static addUser = async (req, res) => {
        let data = req.body;
        data.password = bcrypt.hashSync(data.password, 10);
        await Users.create(data);
        res.status(200).send("success");
    }

    static login = async (req, res) => {
        const { email, password } = req.body;
        let user = await Users.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: `User with such ${email} not found` })
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: "Password is not correct" })
        }
        return res.send({user})
    }
};

module.exports = UserController;