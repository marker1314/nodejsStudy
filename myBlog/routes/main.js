const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/post");
const asyncHandler = require("express-async-handler");


router.get(
    ["/","/home"], 
    asyncHandler(async(req, res) => {
    const locals = {
        title: "Home",
    }
    const data = await Post.find({});
    res.render("index",{locals : locals, data, layout : mainLayout});
})); 

router.get("/about", (req, res) => {
        const locals = {
        title: "About",
    }
    res.render("about",{locals : locals,layout : mainLayout});
});

//*게시물 상세보기 
// GET /post/:id
router.get( "/post/:id",
    asyncHandler(async(req, res) => {
    const data = await Post.findOne({_id: req.params.id});
    res.render("post",{data, layout : mainLayout});
}));

module.exports = router;

// temporary code to insert sample posts into the database
/*
Post.insertMany([
    {
        title: "First Post",
        body: "This is the body of the first post."
    },
    {
        title: "Second Post",
        body: "This is the body of the second post."
    },
    {
        title: "Third Post",
        body: "This is the body of the third post."
    },
    {
        title: "Fourth Post",
        body: "This is the body of the fourth post."
    },
    {
        title: "Fifth Post",
        body: "This is the body of the fifth post."
    },]);
    */