const db = require('../config/db');

exports.saveForm = (formData, callback) => {
  const { tripType, fromLocation, toLocation, departureDate, returnDate, passengers, seatClass, airlines, directFlights } = formData;
  const sql = `INSERT INTO flightSearch (tripType, fromLocation, toLocation, departureDate, returnDate, passengers, seatClass, airlines, directFlights)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.run(sql, [tripType, fromLocation, toLocation, departureDate, returnDate, passengers, seatClass, airlines, directFlights ? 1 : 0], callback);
};