const jwt = require('jsonwebtoken');
const { Users } = require('../models');

module.exports = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.SECRET, async () => {
        const user = await Users.findByPk(token.data.id);
        console.log(token)

        if (err) {
            return res.sendStatus(403)
        } else {
            req.user = user
            next()
        }
    })
};