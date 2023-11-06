const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const Events = require('../models/events');

// add some kind of check to see if token and userId exist
// before allowing New Event creation

const EventsController = {
  Create: async (req, res) => {
    try {
      const { eventName, userId } = req.body;
      const file = req.file; 
      const results = [];

      fs.createReadStream(file.path) 
        .pipe(csv({ separator: ',' }))
        .on('data', (data) => results.push(data))
        .on('end', async () => {
          const attendees = [];
          results.forEach((row) => {
            const { 'First Name': firstName, 'Last Name': lastName, 'Email': email, 'Ticket Price': ticketPrice } = row;
            const newAttendee = {
              firstName,
              lastName,
              email,
              paidStatus: 'Paid',
              pricePaid: ticketPrice,
            };
            attendees.push(newAttendee);
          });
          const newEvent = new Events({ user: userId, eventName: eventName, attendees: attendees });
          await newEvent.save();
          res.status(200).json({ message: 'File data received and processed successfully' });
        });
    } catch (error) {
      console.error('Error processing file data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = EventsController;
