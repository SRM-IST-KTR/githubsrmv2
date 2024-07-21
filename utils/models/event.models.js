const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    event_name: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
        required: true
    },
    speakers_details: [{
        name: {
            type: String,
        },
        designation: {
            type: String,
        },
        details: String
    }],
    event_date: {
        type: Date,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    venue: {
        type: String,
        required: true
    },
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
    certificateLink: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    poster_url: {
        type: String,
        required: true
    },
    registration_url: {
        type: String,
        required: true
    },
    gallery: [String],
    database: {
        type: String,
        required: true
    },
    collection: {
        participants: {
            type: String,
            required: true
        },
        organizers: {
            type: String,
            required: true
        },
        volunteers: {
            type: String,
            required: true
        }
    },
    certificate: {
        organizers: {
            type: String,
            required: true
        },
        participants: {
            type: String,
            required: true
        },
        volunteers: {
            type: String,
            required: true
        }
    },
    jimp_config: {
        yOffset: {
            type: String,
        },
        color: {
            type: String,
        },
        font_size: {
            type: String,
        }
    },
    teamEvent: {
        type: Boolean,
        default: false
    },
    teamSize: {
        type: Number,
        default: 1
    }
});

const Event = mongoose.models.Event || mongoose.model('events', eventSchema);

export default Event;