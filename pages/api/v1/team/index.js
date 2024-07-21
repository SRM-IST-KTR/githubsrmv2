import Team from "@/utils/models/team.model";
import DBInstance from "@/utils/db";
DBInstance();

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            // Retrieve all current team members from the database and sort by index
            const team = await Team.find({ isCurrent: true }).sort({
                index: 1
            });

            // Send the response with the retrieved team members
            res.status(200).json({ success: true, data: team });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
}
