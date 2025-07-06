const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // You don't need this since you're already using express.json()

require('./database/setup'); // Correct

const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(cors()); // Correct
app.use(express.json()); // This is enough for JSON body parsing, bodyParser.json() is not needed anymore.

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
