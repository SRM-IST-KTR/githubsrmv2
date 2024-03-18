const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_name: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
        required: true
    },
    speakers_details: [{
        name: String,
        designation: String,
        details: String
    }],
    event_date: {
        type: Date,
        required: true
    },
    is_active: {
        type: Boolean,
        default: false
    },
    venue: String,
    sponsors_details: [{
        name: String,
        place: String,
        details: String
    }],
    duration: {
        type: Number,
        required: true
    },
    prerequisites: [String],
    cost: {
        type: Number,
        default: 0
    },
    poster_url: String,
    registration_url: String,
    database: String,
    collection: {
        participants: String,
        organizers: String,
        volunteers: String
    },
    certificate: {
        organizers: String,
        participants: String,
        volunteers: String
    },
    jimp_config: {
        yOffset: String,
        color: String,
        font_size: String
    },
    teamEvent: {
        type: Boolean,
        default: true
    },
    teamSize: {
        type: Number,
        required: true
    }
});

const Event = mongoose.model('Events', eventSchema);

export default Event;