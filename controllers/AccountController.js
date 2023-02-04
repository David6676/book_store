const { Users } = require("../models");

class AuthController {

    static deleteUser = async (req, res) => {
        let { id } = req.params
        await Users.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send("Success delete");
    }
}

module.exports = AuthController