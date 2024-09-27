import DBInstance from "@/utils/db";
import ParticipantUser from "@/utils/models/recruitment.model";
import Task from "@/utils/models/tasks.model";

DBInstance();

// Utility function to clean up the reference link and any other fields if necessary
const cleanTaskData = (task) => {
    // Ensure the reference-link is cleaned from any extra quotes and whitespace
    if (task["link"]) {
        task["link"] = task["link"].replace(/^\s*"+|"+\s*$/g, ''); // Remove leading/trailing quotes and whitespace
    }
    return task;
};

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        try {
            const { email } = req.query;

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

            // Extract the domain keys only
            const domainKeys = Array.from(domain.keys())[0]; // Take the first key

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
                    domain: domainKeys, // Return only the domain keys
                    subdomains: subdomainsList,
                    status,
                    tasks: []
                });
            }

            // Fetch tasks based on the query
            let tasks = await Task.find({
                $or: taskQueries
            });

            // Clean each task before sending it to the client
            tasks = tasks.map(cleanTaskData);

            return res.status(200).json({
                name,
                regNo,
                email: participantEmail,
                year,
                dept,
                phoneNo,
                domain: domainKeys, // Return only the domain keys
                subdomains: subdomainsList,
                status,
                tasks // This will include the reference link along with other task details
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