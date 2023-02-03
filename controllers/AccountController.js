const { Users } = require("../models");

class AuthController {

    static deleteUser = async (req, res) => {
        await Users.destrot({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Success delete");
    }
}

module.exports = AuthController