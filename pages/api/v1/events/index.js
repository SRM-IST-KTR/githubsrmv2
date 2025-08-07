import Event from "@/utils/models/event.models";
import DBInstance from "@/utils/db";

// Simple in-memory cache
let eventsCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const now = Date.now();

            // Check if we have cached data that's still valid
            if (eventsCache && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
                // console.log("✅ Serving events from cache");
                res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
                return res.status(200).json({ success: true, data: eventsCache });
            }

            // console.log("🔄 Connecting to database for events data...");

            // Connect to database
            await DBInstance();

            // console.log("🔍 Querying events...");

            // Retrieve all events from the database
            const events = await Event.find().lean();

            // console.log(`📅 Found ${events.length} events`);

            // Update cache
            eventsCache = events;
            cacheTimestamp = now;

            // console.log("✅ Serving events from database");
            res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
            res.status(200).json({ success: true, data: events });
        } catch (error) {
            console.error("❌ Events API Error:", error.message);

            // If we have cached data, serve it even if it's expired
            if (eventsCache) {
                // console.log("🔄 Serving stale events cache due to error");
                res.setHeader('Cache-Control', 'public, s-maxage=60');
                return res.status(200).json({ success: true, data: eventsCache });
            }

            res.status(500).json({
                success: false,
                error: error.message || "Internal Server Error"
            });
        }
    } else {
        console.log("🚫", req.method, "was called on events API and got an error!");
        res.status(405).json({
            success: false,
            error: "Method Not Allowed"
        });
    }
}