const express = require("express")  
const { create } = require("../controller/user.controller")
const upload = require("../config/multer.config")

const router = express.Router()

router.post("/create", upload.array("photo"), create )

module.exports = router