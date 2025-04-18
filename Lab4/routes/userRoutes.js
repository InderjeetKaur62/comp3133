const express = require("express");
const User = require("../models/user");

const app = express();

// POST API to insert user into MongoDB
app.post("/user", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;