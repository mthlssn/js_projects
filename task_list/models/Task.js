const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        requeire: true,
    },
    check: {
        type: Boolean,
        requeire: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("Task", taskSchema);