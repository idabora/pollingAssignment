const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [
        {
            id: { type: String, required: true },
            text: { type: String, required: true },
            votes: { type: Number, default: 0 },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Poll", pollSchema);
