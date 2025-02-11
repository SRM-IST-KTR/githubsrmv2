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

const Sponsor = mongoose.model.Sponsor || mongoose.model("sponsors", sponsorSchema);

export default Sponsor;