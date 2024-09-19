import DBInstance from "@/utils/db";
import Participant from "@/utils/models/recruitment.model.js";

DBInstance();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, registrationNo, email, phone, branch, year, position, subDomain1, subDomain2 } = req.body;

        // Validate required fields
        if (!name || !registrationNo || !email || !phone || !branch || !year || !position) {
            return res.status(400).json({ success: false, error: "All fields are required." });
        }

        try {
            // Check if the participant already exists based on email or registration number
            const existingParticipant = await Participant.findOne({
                $or: [{ email }, { regNo: registrationNo }]
            });

            if (existingParticipant) {
                return res.status(400).json({
                    success: false,
                    error: "Email or Registration Number already registered."
                });
            }

            // Structure the domain object based on the position and subdomains
            const domain = {
                [position]: [subDomain1]
            };

            if (subDomain2) {
                domain[position].push(subDomain2); // Add subDomain2 only if provided
            }

            // Create a new participant
            const newParticipant = new Participant({
                name,
                regNo: registrationNo,
                email,
                phoneNo: phone,
                dept: branch,
                domain,
                status: "registered"
            });

            // Save the new participant to the database
            await newParticipant.save();

            // Respond with success and the new participant data
            return res.status(201).json({
                success: true,
                data: newParticipant
            });
        } catch (error) {
            // Handle any errors that occur during the process
            console.error("Error during registration:", error);
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