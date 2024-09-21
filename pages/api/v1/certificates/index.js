import DBInstance from "@/utils/db";
import Event from "@/utils/models/event.models";
import textOverlay from "@/utils/certificates/jimpOverlay";
import mongoose from "mongoose";
import path from "path";

DBInstance();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, event, type } = req.body;

        if (!email || !event || !type) {
            return res
                .status(400)
                .json({ success: false, error: "All fields are required." });
        }

        try {
            const eventData = await Event.findOne({ slug: event });

            if (!eventData) {
                // console.log("Event not found for slug:", event);
                return res.status(404).json({
                    success: false,
                    error: `Event not found with slug: ${event}`
                });
            }
            // console.log("eventData:", eventData);

            // console.log("eventData.jimp_config:", eventData.jimp_config);
            if (!eventData.jimp_config) {
                // console.log("jimp_config is missing from eventData");
                return res.status(500).json({
                    success: false,
                    error: "jimp_config is missing from eventData"
                });
            }

            // console.log("Type received:", type);
            const normalizedType = type.toLowerCase();
            const certificateURL = eventData.certificate[normalizedType];

            if (!certificateURL) {
                // console.log(
                //     "Certificate URL not found for type:",
                //     normalizedType
                // );
                return res.status(404).json({
                    success: false,
                    error: `Certificate not found for type: ${normalizedType}`
                });
            }

            const db = mongoose.connection.useDb(eventData.database);
            const userSchema = new mongoose.Schema({
                name: { type: String, required: true },
                email: { type: String, required: true }
            });

            const User = db.model(eventData.collection[type], userSchema);
            const userData = await User.findOne({ email });

            if (!userData) {
                return res.status(404).json({
                    success: false,
                    error: `No certificate found for email: ${email}`
                });
            }
            // console.log("User data:", userData);

            const color =
                typeof eventData.jimp_config.color === "string"
                    ? eventData.jimp_config.color.toUpperCase()
                    : "WHITE";

            const fontSize = eventData.jimp_config.font_size || "64";
            const yOffset = eventData.jimp_config.yOffset || "380";
            const jimpOptions = {
                FONT_64_WHITE: path.resolve(
                    "./public/fonts/open-sans-64-white/open-sans-64-white.fnt"
                ),
                FONT_64_BLACK: path.resolve(
                    "./public/fonts/open-sans-64-black/open-sans-64-black.fnt"
                ),
                FONT_32_WHITE: path.resolve(
                    "./public/fonts/open-sans-32-white/open-sans-32-white.fnt"
                ),
                FONT_32_BLACK: path.resolve(
                    "./public/fonts/open-sans-32-black/open-sans-32-black.fnt"
                )
            };
            const { buffer, error, error_message } = await textOverlay(
                userData.name,
                certificateURL,
                color,
                fontSize,
                yOffset,
                jimpOptions
            );

            if (error) {
                console.error("Error from textOverlay:", error_message);
                return res.status(500).json({
                    success: false,
                    error: error_message
                });
            }

            return res.status(200).json({
                success: true,
                certificate: buffer,
                name: userData.name
            });
        } catch (err) {
            console.error("Error during processing:", err.message);
            return res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    } else {
        res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
}
