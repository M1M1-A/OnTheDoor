const express = require("express");
const router = express.Router();

const GuestsController = require("../controllers/guests");

router.patch("/", GuestsController.UpdateGuestArrival);
router.get("/", GuestsController.GetGuest);
router.post("/", GuestsController.AddGuest)

module.exports = router;
