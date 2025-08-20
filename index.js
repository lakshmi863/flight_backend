const express = require('express');
const cors = require('cors');

require('./database/setup');

const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Allow multiple origins
const allowedOrigins = [
  'http://localhost:5173',    
  'http://localhost:3000',                // React frontend local
  'http://localhost:7000',                 // backend dev if needed
  'https://flight-booking-system-spm0.onrender.com/', // deployed frontend
  'https://green-plant-06346c70f.1.azurestaticapps.net' // Azure static
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin (like mobile apps or curl)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);
app.use('/api/chat', chatRoutes);

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
