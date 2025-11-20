const mongoose = require("mongoose")
const asyncsHandler = require("express-async-handler");
require("dotenv").config();

const connectDB = asyncsHandler (async() => {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);
    });       

module.exports = connectDB;