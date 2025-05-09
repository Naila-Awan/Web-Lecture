import express from 'express';

const app = express();

// Define your home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Home Page' });
});
