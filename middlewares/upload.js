const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === "book_picture") {
            cb(null, "static/book_photo")
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

module.exports = upload