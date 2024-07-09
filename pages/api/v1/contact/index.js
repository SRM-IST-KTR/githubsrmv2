import Contact from "@/utils/models/contact.model";
import DBInstance from "@/utils/db";
DBInstance();

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, email, message } = req.body;

            const contact = new Contact({
                name,
                email,
                message
            });

            await contact.save();

            res.status(200).json({ message: "Message sent successfully" });
        } catch (error) {
            console.error(error, res, "INTERNAL_SERVER_ERROR");
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
