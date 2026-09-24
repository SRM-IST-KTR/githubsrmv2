import { API_BASE_URL } from "@/utils/config";

export const config = {
    api: {
        bodyParser: true,
        responseLimit: false,
    },
};

/**
 * Server-side proxy for the backend certificate generation endpoint.
 *
 * The backend now guards POST /api/certificate/generate with the admin key
 * (SERVICE_API_KEY). That key must never reach the browser, so the public
 * site calls this same-origin route instead and we attach the key here,
 * server-side.
 */
export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const serviceKey = process.env.SERVICE_API_KEY;

    if (!serviceKey) {
        return res.status(500).json({ success: false, message: "Server configuration error" });
    }

    try {
        const upstream = await fetch(`${API_BASE_URL}/api/certificate/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${serviceKey}`,
            },
            body: JSON.stringify(req.body || {}),
        });

        const contentType = upstream.headers.get("content-type") || "";

        if (!upstream.ok) {
            const payload = await upstream.json().catch(() => ({
                success: false,
                message: "Certificate service returned an error",
            }));

            return res.status(upstream.status).json(payload);
        }

        if (contentType.includes("application/json")) {
            const payload = await upstream.json();
            return res.status(200).json(payload);
        }

        const buffer = Buffer.from(await upstream.arrayBuffer());
        res.setHeader("Content-Type", contentType || "application/octet-stream");

        const disposition = upstream.headers.get("content-disposition");
        if (disposition) {
            res.setHeader("Content-Disposition", disposition);
        }

        return res.status(200).send(buffer);
    } catch (error) {
        return res.status(502).json({
            success: false,
            message: "Failed to reach the certificate service",
        });
    }
}
