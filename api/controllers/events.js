const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const Events = require("../models/events");
const { ObjectId } = require("mongodb");

// add some kind of check to see if token and userId exist
// before allowing New Event creation

const EventsController = {
  Create: async (req, res) => {
    try {
      const { eventName, userId } = req.body;
      const file = req.file;
      const results = [];

      fs.createReadStream(file.path)
        .pipe(csv({ separator: "," }))
        .on("data", (data) => results.push(data))
        .on("end", async () => {
          const guests = [];
          results.forEach((row) => {
            const {
              "First Name": firstName,
              "Last Name": lastName,
              "Email": email,
              "Total Paid": totalPaid,
            } = row;
            const newGuest = {
              firstName,
              lastName,
              email,
              paidStatus: "Pre-Paid",
              pricePaid: totalPaid,
              arrived: false,
            };
            guests.push(newGuest);
          });
          const newEvent = new Events({
            user: userId,
            eventName: eventName,
            guests: guests,
          });
          await newEvent.save();
          res
            .status(200)
            .json({ message: "File data received and processed successfully", eventId: newEvent._id });
        });
    } catch (error) {
      console.error("Error processing file data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  GetEvent: async (req, res) => {
    try {
      const { eventId, userId } = req.query;
      const userObjectId = ObjectId(userId);
      const eventObjectId = ObjectId(eventId);
      const event = await Events.findOne({
        user: userObjectId,
        _id: eventObjectId,
      });
      if (!event) {
        res.status(404).json({ message: "Event not found" });
      } else {
        res.status(200).json({ event: event });
      }
    } catch (error) {
      console.log("Error retrieving event", error);
      res.status(500).json({ error: "Error retrieving event" });
    }
  },
  GetAllEvents: async (req, res) => {
    try {
      const { userId } = req.query;
      const userObjectId = ObjectId(userId);
      const events = await Events.find({
        user: userObjectId,
      });
  
      if (!events || events.length === 0) {
        res.status(404).json({ message: "Events not found" });
      } else {
        const mappedEvents = events.map((event) => ({
          eventId: event._id,
          eventName: event.eventName,
        }));
        res.status(200).json({ events: mappedEvents });
        console.log("All events retrieved successfully");
      }
    } catch (error) {
      console.log("Error retrieving events", error);
      res.status(500).json({ error: "Error retrieving events" });
    }
  },  
  GetEventData: async (req, res) => {
    try {
      const { eventId, userId } = req.query;
      const userObjectId = ObjectId(userId);
      const eventObjectId = ObjectId(eventId);
      const event = await Events.findOne({
        user: userObjectId,
        _id: eventObjectId,
      });

      if (!event) {
        res.status(404).json({ message: "Event not found" });
      } else {
        const arrivedCount = event.guests.filter(guest => guest.arrived === true).length;
        const yetToArriveCount = event.guests.filter(guest => guest.arrived !== true).length;
        const prePaidSales = event.guests.reduce(
          (count, guest) => count + (guest.paidStatus === "Pre-Paid" ? parseFloat(guest.pricePaid) : 0),
          0
        );
        const salesOnDoor = event.guests.reduce(
          (count, guest) => count + (guest.paidStatus === "Paid on door" ? parseFloat(guest.pricePaid) : 0),
          0
        );

        const arrivedSeries = [arrivedCount, yetToArriveCount]
        const salesSeries = [prePaidSales, salesOnDoor]
        const totalSales = prePaidSales + salesOnDoor

        res.status(200).json({
          arrivedCount,
          yetToArriveCount,
          prePaidSales,
          salesOnDoor,
          arrivedSeries,
          salesSeries,
          totalSales
        });
      }
    } catch (error) {
      console.log("Error retrieving event data", error);
      res.status(500).json({ error: "Error retrieving event data" });
    }
  },
};

module.exports = EventsController;
