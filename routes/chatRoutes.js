// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to send a new chat message (protected)
router.post('/send', authMiddleware, chatController.sendMessage);

// Route to get all chat messages (protected)
router.get('/messages', authMiddleware, chatController.getMessages);

module.exports = router;
