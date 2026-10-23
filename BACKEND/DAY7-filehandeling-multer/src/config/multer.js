const multer = require("multer");

// disk storage for local
const storageForLocal = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// for server
const storage = multer.memoryStorage()

const uploads = multer({ storage  });

module.exports = uploads;
