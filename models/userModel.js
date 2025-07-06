const db = require('../config/db');

exports.createUser = (name, email, password, callback) => {
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.run(sql, [name, email, password], callback);
};

exports.findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.get(sql, [email], callback);
};