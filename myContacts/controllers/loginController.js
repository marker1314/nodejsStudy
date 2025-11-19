const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// Get login page
// GET /
const getLogin = asyncHandler(async (req, res) => {
    res.render("home");
});

// Login User
// POST /
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.send("Login success");
    }else{
        res.send("Login failed");
    }
});

// Register page
// GET /register
const getRegister = asyncHandler(async (req, res) => {
    res.render("register");
});

// Register user
// POST /register
const registerUser = asyncHandler(async (req, res) => {
    const { username, password, password2 } = req.body;
    if (password === password2) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.json({ message: "Register successful", user });
    } else {
        res.send("Register failed")
    }
});

module.exports = { getLogin, loginUser, getRegister, registerUser };