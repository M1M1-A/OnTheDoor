const mongoose = require("mongoose");

const AttendeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  paidStatus: { type: String, required: true },
  pricePaid: { type: String, required: false },
  arrived: { type: Boolean, required: false}
});

const EventsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventName: { type: String, required: true },
  attendees: [AttendeeSchema],
});

const Events = mongoose.model("Events", EventsSchema);

module.exports = Events;
