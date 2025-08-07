const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    index: Number,
    name: String,
    domain: String,
    position: String,
    caption: String,
    joined: Number,
    pictureUrl: String,
    isCurrent: Boolean,
    socials: {
        github: String,
        website: String,
        linkedin: String,
        twitter: String,
        instagram: String
    }
});

// Add indexes for frequently queried fields
teamSchema.index({ isCurrent: 1, index: 1 }); // Compound index for filtering current members and sorting by index
teamSchema.index({ position: 1 }); // Index for position filtering
teamSchema.index({ domain: 1 }); // Index for domain filtering

// Disable buffering on this schema
teamSchema.set('bufferCommands', false);

const Team = mongoose.models.teams || mongoose.model("teams", teamSchema);

export default Team;
