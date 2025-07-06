const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  userModel.findUserByEmail(email, async (err, user) => {
    if (user) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    userModel.createUser(name, email, hashedPassword, (err) => {
      if (err) return res.status(500).json({ message: 'Signup failed' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

  userModel.findUserByEmail(email, async (err, user) => {
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.status(200).json({ token, message: 'Login successful' });
  });
};
