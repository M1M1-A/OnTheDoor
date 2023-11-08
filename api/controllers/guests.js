const Events = require("../models/events");
const { ObjectId } = require("mongodb");

const GuestController = {
  // addGuest:

  UpdateGuestArrival: async (req, res) => {
    try {
      const { guestId } = req.body;
      const eventId = ObjectId(req.body.eventId)

      const event = await Events.findById(eventId);

      if (event) {
        const guest = event.guests.find((guest) => guest._id.toString() === guestId);
        if (guest) {
          guest.arrived = true;
          await event.save();
          res.status(200).json({ message: "Guest Checked In" });
        } else {
          res.status(404).json({ message: "Guest not found" });
        }
      } else {
        res.status(404).json({ message: "Event not found" });
      }
    } catch (error) {
      console.log("Error updating guest details", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = GuestController;