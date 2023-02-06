const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === "cover_book") {
            cb(null, "static/book_photo");
        } else if (file.fieldname === "book_uid") {
            cb(null, "static/book_file");
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        if (file.fieldname === "cover_book") {
            if (file.originalname.slice(-3) === "png") {
                const fileName = `${file.fieldname}-${uniqueSuffix}.png`;
                req.body.coverBook = `books/cover/${fileName}`;
                cb(null, fileName);
            } else if (file.originalname.slice(-3) === "jpg") {
                const fileName = `${file.fieldname}-${uniqueSuffix}.jpg`;
                req.body.coverBook = `books/cover/${fileName}`;
                cb(null, fileName);
            }
        } else {
            const fileName = `${file.fieldname}-${uniqueSuffix}.pdf`;
            req.body.bookUID = `books/file/${fileName}`;
            cb(null, fileName);
        }
    }
})

const upload = multer({ storage: storage });
module.exports = upload;