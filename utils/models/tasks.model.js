const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    guidelines: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    domain: {
        type: String,
        enum: ["Technical", "Creatives", "Corporate"],
        required: true
    },
    subdomain: {
        type: String,
        enum: [
            "AIML", "Web-Dev", "CP", "App-dev", "Frontend", "Backend", "Full-stack",
            "GD", "VFX", " "
        ],
        required: true
    },
    taskType: {
        type: String,
        enum: ["Frontend", "Backend", "Full-stack", "AIML", "CP", "App-dev", "GD", "VFX"],
        required: true
    },
    year: {
        type: String,
        enum: ["1st", "2nd"],
        required: true
    },
    deadline: {
        type: Date,
        required: false
    },
});

const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

module.exports = Task;
