module.exports = (connect, Sequelize) => {
    const Users = connect.define("users", {
        name: {
            type: Sequelize.STRING,
            field: "name"
        },
        surname: {
            type: Sequelize.STRING,
            field: "surname"
        },
        age: {
            type: Sequelize.INTEGER,
            field: "age"
        },
        email: {
            type: Sequelize.STRING,
            field: "email"
        },
        password: {
            type: Sequelize.STRING,
            field: "password"
        },
    }, {
        freezeTableName: true
    })
    return Users
};