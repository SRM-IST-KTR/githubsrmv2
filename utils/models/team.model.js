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
        twitter: String
    }
});

const Team = mongoose.model("team", teamSchema);

export default Team;
