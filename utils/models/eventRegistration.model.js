const mongoose = require('mongoose');

const eventRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/.+@srmist\.edu\.in$/, 'Please enter a valid SRMIST email address'],
    },
    contact: {
        type: String,
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true,
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});

const EventRegistration = mongoose.model('eventRegistrations', eventRegistrationSchema);

module.exports = EventRegistration;
