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

const Team = mongoose.model.teams || mongoose.model("teams", teamSchema);

export default Team;
