const express = require("express");
const router = express.Router();
const multer = require('multer');
const os = require('os');
const upload = multer({ dest: os.tmpdir() });
const EventsController = require("../controllers/events");

router.post("/new-event", upload.single("file"), EventsController.Create);
router.get("/get-event", EventsController.GetEvent)
router.get("/get-all-events", EventsController.GetAllEvents)

module.exports = router;

