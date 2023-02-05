const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next) {

    const token = req.headers.authorization.split(' ')[1];

    try {
        if (!token) {
            return res.status(401);
        } else {
            jwt.verify(token, process.env.SECRET, async (err) => {
                if (err) {
                    return res.status(401).send(err);
                } else {
                    next();
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
};