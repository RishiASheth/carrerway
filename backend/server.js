const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add cors for handling cross-origin requests
const UserModel = require('./Models/LoginBackEnd.jsx'); // Ensure the path and file name are correct

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

// Connect to MongoDB
mongoose.connect("mongodb+srv://San:San@cluster0.gt7jl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection error:", err));


// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, welcome to the server');
});

// Route to register a new user
app.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new Error("Missing required fields");
      }
      const newUser = new UserModel({ name, email, password });
      await newUser.save();
      console.log("User registered successfully:", newUser);
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(400).send('Error registering user: ' + error.message);
    }
  });
  

// Route to log in an existing user
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Success", userId: user._id, userName: user.name }); // Return userId and userName on successful login
                } else {
                    res.status(401).json({ message: "Password is incorrect. Please try again." });
                }
            } else {
                res.status(404).json({ message: "No record existed" });
            }
        })
        .catch(err => {
            console.error("Error during login:", err);
            res.status(500).json({ message: "An error occurred during login. Please try again." });
        });
});

// Server listening
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});