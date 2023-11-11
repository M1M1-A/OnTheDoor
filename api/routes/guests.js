const express = require("express");
const router = express.Router();

const GuestsController = require("../controllers/guests");

router.patch("/check-in", GuestsController.UpdateGuestArrival);
router.post("/add-guest", GuestsController.AddGuest)

module.exports = router;
