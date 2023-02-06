const { Sequelize } = require("sequelize");

const { HOST, USER, PASSWORD, DB, DIALECT } = require("../config");

const connect = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT
});

const Users = require("./Users")(connect, Sequelize)
const Book = require("./Book")(connect, Sequelize)

Users.hasMany(Book, { foreignKey: "user_id" })

connect.sync({ alter: true });

module.exports = {
    Users,
    Book
};