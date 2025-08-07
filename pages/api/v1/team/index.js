import Team from "@/utils/models/team.model";
import DBInstance from "@/utils/db";

// Simple in-memory cache
let teamCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const now = Date.now();

            // Check if we have cached data that's still valid
            if (teamCache && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
                // console.log("✅ Serving team from cache");
                res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=1200');
                return res.status(200).json({ success: true, data: teamCache });
            }

            // console.log("🔄 Connecting to database for team data...");

            // Connect to database
            await DBInstance();

            // console.log("🔍 Querying team members...");

            // Retrieve all current team members from the database and sort by index
            const team = await Team.find({ isCurrent: true }).sort({
                index: 1
            }).lean();

            // console.log(`👥 Found ${team.length} team members`);

            // Update cache
            teamCache = team;
            cacheTimestamp = now;

            // console.log("✅ Serving team from database");
            res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=1200');
            res.status(200).json({ success: true, data: team });
        } catch (error) {
            console.error("❌ Team API Error:", error.message);

            // If we have cached data, serve it even if it's expired
            if (teamCache) {
                console.log("🔄 Serving stale team cache due to error");
                res.setHeader('Cache-Control', 'public, s-maxage=60');
                return res.status(200).json({ success: true, data: teamCache });
            }

            res.status(500).json({
                success: false,
                error: error.message || "Internal Server Error"
            });
        }
    } else {
        console.log("🚫", req.method, "was called on team API and got an error!");
        res.status(405).json({
            success: false,
            error: "Method Not Allowed"
        });
    }
}
