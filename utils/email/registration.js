import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const sesClient = new SESClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

export async function sendRegistrationEmail(participant, event) {
    try {
        const filePath = path.resolve(
            process.cwd(),
            "utils/email/registrationMail.html"
        );

        const emailContent = fs.readFileSync(filePath, "utf8");

        const customizedContent = emailContent
            .replaceAll("{{name}}", participant.name)
            .replaceAll("{{email}}", participant.email)
            .replaceAll("{{phn}}", participant.phn)
            .replaceAll("{{event}}", event.event_name)
            .replaceAll("{{department}}", participant.dept)
            .replaceAll("{{registrationNumber}}", participant.regNo)
            .replaceAll("{{event_description}}", event.event_description)
            .replaceAll("{{date}}", event.event_date)
            // .replaceAll("{{time}}", event.event_time)
            .replaceAll("{{venue}}", event.venue)
            .replaceAll("{{prerequisites}}", event.prerequisites);

        const params = {
            Destination: {
                ToAddresses: [participant.email]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: customizedContent
                    }
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: `Registration Confirmation for ${event.event_name}`
                }
            },
            Source: `"GitHub Community SRM | Events" <events@githubsrmist.tech>`,
            ReplyToAddresses: ["community@githubsrmist.tech"]
        };

        const command = new SendEmailCommand(params);
        await sesClient.send(command);
        console.log("Registration email sent successfully.");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
