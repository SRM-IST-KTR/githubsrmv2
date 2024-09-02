import EventRegistration from "@/utils/models/eventRegistration.model";
import DBInstance from "@/utils/db";

// Initialize the DB connection
DBInstance();

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, contact, registrationNumber, department } = req.body;
            const eventregistration = new EventRegistration({
                name,
                email,
                contact,
                registrationNumber,
                department,
                registeredAt: new Date()
            });

            // Save the registration to the database
            await eventregistration.save();

            // Send success response
            res.status(200).json({ message: "Registration successful" });
        } catch (error) {
            console.error("Error saving registration:", error);

            // Send error response
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        // Handle invalid HTTP methods
        console.log("🚫", req.method, "was called and got an error!");
        res.status(405).json({
            success: false,
            data: null,
            message: "🚫 HTTP Method not Allowed"
        });
    }
}
