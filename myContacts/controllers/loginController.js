const asyncHandler = require("express-async-handler");

//Get login Page
//GEt/
const getLogin = (req,res)=>{
    res.render("home");
}

//Login user
//POST /
const loginUser = asyncHandler(async(req,res)=>{
    const {username, password} = req.body;

    if(username ==="admin" && password==="1234"){
        res.send("login Success");
    }
    else{
        res.send("login Failed");
    }
});

module.exports = {getLogin , loginUser};