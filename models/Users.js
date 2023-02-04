module.exports = (connect, Sequelize) => {
    const Users = connect.define("users", {
        name: {
            type: Sequelize.STRING,
            field: "name",
            allowNull: true
        },
        surname: {
            type: Sequelize.STRING,
            field: "surname",
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            field: "age",
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            field: "email",
            allowNull: true,
        },
        password: {
            type: Sequelize.STRING,
            field: "password",
            allowNull: true,
        },
    }, {
        freezeTableName: true
    })
    return Users
};