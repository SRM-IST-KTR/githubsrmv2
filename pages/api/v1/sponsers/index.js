import Contact from "@/utils/models/sponser.model";
import DBInstance from "@/utils/db";
import Sponsor from "@/utils/models/sponser.model";
DBInstance();

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const sponsers = await Sponsor.find();
            console.log("hello2s")
            res.status(200).json({ success: true, data: sponsers });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    } else {
        console.log("🚫", req.method, "was called and got an error!");
        res.status(405).json({
            success: false,
            data: null,
            message: "🚫 HTTP Method not Allowed"
        });
    }
}
