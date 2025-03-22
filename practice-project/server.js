const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://ubdaleuddin:F0GmVuavP8MGnrZU@cluster0.dieq9.mongodb.net/formDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Define Schema
const formSchema = new mongoose.Schema({
    email: String,
    message: String
});

const Form = mongoose.model('Form', formSchema);

// Handle Form Submission
app.post('/form', async (req, res) => {
    try {
        const formData = new Form(req.body);
        await formData.save();
        res.json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving form data" });
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
