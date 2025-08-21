const express = require('express');
const cors = require('cors');

require('./database/setup');

const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Allowed origins (remove trailing slashes)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:3004',   // add this line
  'http://localhost:7000',
  'https://flight-booking-system-spm0.onrender.com',
  'https://proud-bay-09538c10f.1.azurestaticapps.net'
  
];

// CORS middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like Postman or mobile apps)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
  },
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.use(express.json()); // Parse JSON bodies

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Flight Booking API');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);
app.use('/api/chat', chatRoutes);

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
