const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  let token = req.headers['authorization'];

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  // Remove 'Bearer ' prefix if present
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trim(); // This removes 'Bearer ' from the token
  }

  try {
    const verified = jwt.verify(token, 'SECRET_KEY');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
