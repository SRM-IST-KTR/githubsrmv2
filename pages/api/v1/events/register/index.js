import DBInstance from "@/utils/db";
import Event from "@/utils/models/event.models";
import mongoose from "mongoose";
import { sendRegistrationEmail } from "@/utils/email/registration";

DBInstance();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, regNo, email, phn, dept, slug } = req.body;

        if (!name || !regNo || !email || !phn || !dept || !slug) {
            return res
                .status(400)
                .json({ success: false, error: "All fields are required." });
        }

        try {
            const event = await Event.findOne({ slug });

            if (!event) {
                return res
                    .status(404)
                    .json({ success: false, error: "Event not found." });
            }

            const { database, collection } = event;
            const participantsCollection = collection.participants;
            const db = mongoose.connection.useDb(database);
            const participantSchema = new mongoose.Schema({
                name: { type: String, required: true },
                regNo: { type: String, required: true },
                email: { type: String, required: true },
                phn: { type: String, required: true },
                dept: { type: String, required: true },
                rsvp: { type: Boolean, default: false },
                checkin: { type: Boolean, default: false },
                snacks: { type: Boolean, default: false }
            });

            const Participant = db.model(
                participantsCollection,
                participantSchema
            );

            const existingParticipant = await Participant.findOne({ email });

            if (existingParticipant) {
                return res.status(400).json({
                    success: false,
                    error: "Email already registered for this event."
                });
            }

            const newParticipant = new Participant({
                name,
                regNo,
                email,
                phn,
                dept
            });

            await newParticipant.save();
            await sendRegistrationEmail(newParticipant, event);

            res.status(200).json({
                success: true,
                message: "Participant registered successfully."
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    } else {
        res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
}
