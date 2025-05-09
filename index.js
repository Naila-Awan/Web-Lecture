import express from 'express';
import serverless from 'serverless-http';

const app = express();

// Define your home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Home Page' });
});

// Export as Vercel-compatible handler
export default serverless(app);
