const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/submit', authMiddleware, formController.submitForm);

module.exports = router;
