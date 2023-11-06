const express = require("express");
const router = express.Router();
const multer = require('multer');
const os = require('os');
const upload = multer({ dest: os.tmpdir() });
const EventsController = require("../controllers/events");

router.post("/", upload.single("file"), EventsController.Create);

// router.post("/", (req, res) => {
//   console.log(req)
// }, EventsController.Create);

module.exports = router;

