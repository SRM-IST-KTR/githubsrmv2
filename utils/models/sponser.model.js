import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
});

// Disable buffering on this schema
sponsorSchema.set('bufferCommands', false);

const Sponsor = mongoose.models.sponsors || mongoose.model("sponsors", sponsorSchema);

export default Sponsor;