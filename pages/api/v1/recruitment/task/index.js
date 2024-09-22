import DBInstance from "@/utils/db";
import ParticipantUser from "@/utils/models/recruitment.model";
import Task from "@/utils/models/tasks.model";

DBInstance();

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json({ message: "Email is required" });
            }

            const participant = await ParticipantUser.findOne({ email });
            if (!participant) {
                return res.status(404).json({ message: "Participant not found" });
            }

            // Extract participant details
            const { name, regNo, email: participantEmail, phoneNo, year, dept, domain, status } = participant;
            let taskQueries = [];
            let subdomainsList = [];

            // Handle different domains (Technical, Creatives, Corporate, etc.)
            for (let [domainKey, subdomains] of domain.entries()) {
                if (domainKey === "Corporate") {
                    taskQueries.push({ domain: domainKey, year: year });
                } else {
                    if (subdomains && subdomains.length > 0) {
                        taskQueries.push({
                            domain: domainKey,
                            subdomain: { $in: subdomains },
                            year: year
                        });
                        subdomainsList = subdomainsList.concat(subdomains);
                    }
                }
            }

            if (taskQueries.length === 0) {
                return res.status(200).json({
                    name,
                    regNo,
                    email: participantEmail,
                    year,
                    dept,
                    phoneNo,
                    domain: Object.fromEntries(domain),
                    subdomains: subdomainsList,
                    status,
                    tasks: []
                });
            }

            const tasks = await Task.find({
                $or: taskQueries
            });
            return res.status(200).json({
                name,
                regNo,
                email: participantEmail,
                year,
                dept,
                phoneNo,
                domain: Object.fromEntries(domain),
                subdomains: subdomainsList,
                status,
                tasks
            });
        } catch (error) {
            console.error("Error fetching participant data:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
}