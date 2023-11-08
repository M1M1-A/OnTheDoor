const Events = require("../models/events");
const { ObjectId } = require("mongodb");

const GuestController = {
  // addGuest:

  UpdateGuestArrival: async (req, res) => {
    try {
      const { guestId } = ObjectId(req.body.guestId);

      const guest = await Events.findOneAndUpdate(
        { "guests._id": guestId },
        { $set: { "guests.$.arrived": true } }
      );

      if (guest) {
        res.status(200).json({ message: "Guest Checked In" });
      } else {
        res.status(404).json({ message: "Guest not found" });
      }
    } catch (error) {
      console.log("Error updating guest details", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = GuestController;