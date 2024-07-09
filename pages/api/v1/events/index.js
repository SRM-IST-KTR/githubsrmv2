import Event from "@/utils/models/event.models";
import DBInstance from "@/utils/db";
DBInstance();

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            // Retrieve all events from the database
            const events = await Event.find();

            // Send the response with the retrieved events
            res.status(200).json({ success: true, data: events });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
}