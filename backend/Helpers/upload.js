const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(_dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.orinalname)); // algumacoisa.jpg
  },
});

const filterFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  filterFilter,
});

module.exports = upload;
