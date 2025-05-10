require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const authRouter = require('./routes/auth');
const contactRouter = require('./routes/contact');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
