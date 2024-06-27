const express = require('express');
const router = express.Router();

const {
    createFile,
    getFiles
} = require("../controllers/fileController");

router.post("/",createFile);
router.post("/userfiles",getFiles);

module.exports = router;