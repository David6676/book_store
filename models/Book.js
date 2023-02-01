module.exports = (connect, Sequelize) => {
    const Book = connect.define("books", {
        name: {
            type: Sequelize.STRING,
            allowNull: true,
            field: "name"
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false,
            field: "genre"
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: "price"
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            field: "description"
        },
        author: {
            type: Sequelize.STRING,
            allowNull: true,
            field: "author"
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: "userId",
            references: {
                model: "users",
                key: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
    }, {
        freezeTableName: true
    })
    return Book
};