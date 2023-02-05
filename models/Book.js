module.exports = (connect, Sequelize) => {
    const Book = connect.define("books", {
        name: {
            type: Sequelize.STRING,
            allowNull: true,
            field: "name"
        },
        bookUID: {
            type: Sequelize.STRING,
            allowNull: true,
            field: "book_uid"
        },
        coverBook: {
            type: Sequelize.STRING,
            allowNull: true,
            field: "cover_book"
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
        userId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: "user_id",
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