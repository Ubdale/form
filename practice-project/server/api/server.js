const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const DB_NAME = 'formDatabase'

// MongoDB Connection

mongoose.connect('mongodb://localhost:27017/formDatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
    mongoose.set('debug', true);


// Define Schema & Model
const formSchema = new mongoose.Schema({
    email: String,
    message: String
});

const Form = mongoose.model('Form', formSchema);

// Routes
app.get("/", (req, res) => res.send("Hello, Vercel!"));



app.post('/form', async (req, res) => {
  try {
      const formData = new Form(req.body);
      await formData.save();
      res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving form data" });
  }
});


// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
