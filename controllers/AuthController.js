const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class AuthController {
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
        
        const generateAccessToken = (user) => {
            const payload = {
                data: user
            }
            return jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" })
        }
        const token = generateAccessToken(user)
            
        return res.json({ token })
    }
};

module.exports = AuthController;