const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    static SignUp = async (req, res) => {
        let data = req.body;
        let user = await Users.findOne({
            where: {
                email: data.email
            }
        });
        if (user) {
            return res.status(409).send(`User with such ${data.email} already exists`);
        } else {
            data.password = bcrypt.hashSync(data.password, 10);
            await Users.create(data);
            res.status(201).send("success");
        }
    };

    static SignIn = async (req, res) => {
        const { email, password } = req.body;
        let user = await Users.findOne({
            where:
            {
                email: email
            }
        })
        if (!user) {
            return res.status(404).send(`User with such ${email} not found`);
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(401).send("Password is not correct");
        }
        req.user = user;
        const payload = {
            data: user
        };
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
        return res.send({ token });
    }
};

module.exports = AuthController;