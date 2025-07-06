// models/chatModel.js
const db = require('../config/db');

// Save a new chat message
exports.saveMessage = (userId, message, time, callback) => {
  const sql = `INSERT INTO chatMessages (userId, message, time) VALUES (?, ?, ?)`;
  db.run(sql, [userId, message, time], callback);
};

// Get all chat messages
exports.getAllMessages = (callback) => {
  const sql = `SELECT chatMessages.id, chatMessages.message, chatMessages.time, users.name 
               FROM chatMessages 
               JOIN users ON chatMessages.userId = users.id
               ORDER BY chatMessages.id ASC`;
  db.all(sql, [], callback);
};
