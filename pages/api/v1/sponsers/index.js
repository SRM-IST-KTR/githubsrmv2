import DBInstance from "@/utils/db";
import Sponsor from "@/utils/models/sponser.model";

// Simple in-memory cache
let sponsorsCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const now = Date.now();

            // Check if we have cached data that's still valid
            if (sponsorsCache && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
                // console.log("✅ Serving from cache");
                res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
                return res.status(200).json({ success: true, data: sponsorsCache });
            }

            // console.log("🔄 Connecting to database...");

            // Connect to database
            await DBInstance();

            // console.log("Querying sponsors...");

            // Query with lean for better performance
            const sponsers = await Sponsor.find().lean();

            console.log(`📊 Found ${sponsers.length} sponsors`);

            // Update cache
            sponsorsCache = sponsers;
            cacheTimestamp = now;

            // console.log("✅ Serving from database");
            res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
            res.status(200).json({ success: true, data: sponsers });
        } catch (error) {
            console.error("❌ API Error:", error.message);

            // If we have cached data, serve it even if it's expired
            if (sponsorsCache) {
                console.log("Serving stale cache due to error");
                res.setHeader('Cache-Control', 'public, s-maxage=60');
                return res.status(200).json({ success: true, data: sponsorsCache });
            }

            res.status(500).json({
                success: false,
                error: error.message || "Internal Server Error"
            });
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
