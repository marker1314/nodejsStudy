const monnoose = require("mongoose");

const PostSchema = new monnoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = monnoose.model("Post", PostSchema);