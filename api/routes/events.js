const express = require("express");
const router = express.Router();
const multer = require('multer');
const os = require('os');
const upload = multer({ dest: os.tmpdir() });
const EventsController = require("../controllers/events");

router.post("/", upload.single("file"), EventsController.Create);
router.get('/', EventsController.GetEvent)

module.exports = router;

