const express = require("express"); 
const router = express.Router();
const adminLayout ="../views/layouts/admin";

// Admin 페이지 
// GET /admin
router.get("/admin", (req, res) => {
    const locals = {
        title: "관리자 페이지",
    };
    res.render("admin/index",{locals, layout : adminLayout});
});

module.exports = router;