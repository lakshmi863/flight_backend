const db = require('../config/db');

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`;

const createFlightSearchTable = `
  CREATE TABLE IF NOT EXISTS flightSearch (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    tripType TEXT,
    fromLocation TEXT,
    toLocation TEXT,
    departureDate TEXT,
    returnDate TEXT,
    passengers TEXT,
    seatClass TEXT,
    airlines TEXT,
    directFlights INTEGER
  )
`;

const createChatMessagesTable = `
  CREATE TABLE IF NOT EXISTS chatMessages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    message TEXT,
    time TEXT
  )
`;

// ✅ Create users table
db.run(createUsersTable, (err) => {
  if (err) {
    console.error('Error creating users table:', err.message);
  } else {
    console.log('✅ Users table created or already exists.');
  }
});

// ✅ Create flightSearch table
db.run(createFlightSearchTable, (err) => {
  if (err) {
    console.error('Error creating flightSearch table:', err.message);
  } else {
    console.log('✅ FlightSearch table created or already exists.');
  }
});

// ✅ Create chatMessages table
db.run(createChatMessagesTable, (err) => {
  if (err) {
    console.error('Error creating chatMessages table:', err.message);
  } else {
    console.log('✅ ChatMessages table created or already exists.');
  }
});
