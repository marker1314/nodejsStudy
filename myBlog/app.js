require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

connectDB();


//view engine setup
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views","./views");

//static files
app.use(express.static("public"));

//routes
app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"));

//server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

module.exports = app;

