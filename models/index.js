const { Sequelize } = require("sequelize");

const { HOST, USER, PASSWORD, DB, DIALECT } = require("../config");

const connect = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT
});

const Users = require("./Users")(connect, Sequelize)

connect.sync({ alter: true });

module.exports = {
    Users
};