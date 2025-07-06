// controllers/chatController.js
const chatModel = require('../models/chatModel');

// Save a new chat message
exports.sendMessage = (req, res) => {
  const { message, time } = req.body;

  // Get the userId from the authenticated user (token)
  const userId = req.user.id;

  if (!message || !time) {
    return res.status(400).json({ message: 'Message and time are required.' });
  }

  chatModel.saveMessage(userId, message, time, (err) => {
    if (err) {
      console.error('Error saving message:', err.message);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
    res.status(201).json({ message: 'Message sent successfully.' });
  });
};

// Get all chat messages
exports.getMessages = (req, res) => {
  chatModel.getAllMessages((err, messages) => {
    if (err) {
      console.error('Error retrieving messages:', err.message);
      return res.status(500).json({ message: 'Failed to retrieve messages.' });
    }
    res.status(200).json(messages);
  });
};
