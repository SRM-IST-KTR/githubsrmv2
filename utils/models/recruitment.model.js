const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    regNo: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    domain: {
        type: Map,
        of: {
            type: [String],
            maxlength: 2
        },
        required: true
    },
    links: {
        github: {
            type: String,
            default: null
        },
        demo: {
            type: String,
            default: null
        },
        deployment: {
            type: String,
            default: null
        }
    },
    status: {
        type: String,
        enum: ["registered", "taskShortlisted", "interviewShortlisted"],
        default: "registered"
    }
});

const ParticipantUser = mongoose.model("Recruitment24", participantSchema);

module.exports = ParticipantUser;
