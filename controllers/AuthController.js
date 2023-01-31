const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");


class AuthController {
    static login = async (req, res) => {
        const { email, password } = req.body;
        let user = await Users.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: `User with such ${email} not found` })
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(401).json({ message: "Password is not correct" })
        }

        const payload = {
            data: user
        }

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" })

        return res.send({ token })
    }
};

module.exports = AuthController;