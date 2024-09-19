import DBInstance from "@/utils/db";
import Participant from "@/utils/models/recruitment.model.js";

DBInstance();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, regNo, email, phoneNo, dept, domain } = req.body;

        if (!name || !regNo || !email || !phoneNo || !dept || !domain) {
            return res
                .status(400)
                .json({ success: false, error: "All fields are required." });
        }

        try {
            const existingParticipant = await Participant.findOne({ email });

            if (existingParticipant) {
                return res.status(400).json({
                    success: false,
                    error: "Email already registered for this event."
                });
            }

            // Create a new participant
            const newParticipant = new Participant({
                name,
                regNo,
                email,
                phoneNo,
                dept,
                domain
            });

            // Save the new participant to the database
            await newParticipant.save();

            // Send a registration email to the participant

            // Respond with success and the new participant data
            return res.status(201).json({
                success: true,
                data: newParticipant
            });
        } catch (error) {
            // Handle any errors that occur during the process
            return res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    } else {
        // Handle non-POST requests
        return res.status(405).json({
            success: false,
            error: "Method Not Allowed"
        });
    }
}
