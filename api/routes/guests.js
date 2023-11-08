const express = require("express");
const router = express.Router();

const GuestsController = require("../controllers/guests");

router.patch("/", GuestsController.UpdateGuestArrival);

module.exports = router;
