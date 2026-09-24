/**
 * API Configuration for GitHub Community SRM
 * 
 * Base URL: https://octacore.githubsrmist.in
 * Documentation: https://octacore.githubsrmist.in/api-docs/
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://octacore.githubsrmist.in";

// Read-only key for public display endpoints (team, sponsors, events, certificate verify).
// Safe to be present in the client bundle — the backend restricts it to non-PII reads.
export const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_PUBLIC_API_KEY || "";

/**
 * Build the headers required by the backend's public read guard.
 * Every read endpoint now expects `Authorization: Bearer <PUBLIC_API_KEY>`.
 */
export const publicAuthHeaders = (extraHeaders = {}) => {
    if (!PUBLIC_API_KEY) {
        throw new Error(
            "NEXT_PUBLIC_PUBLIC_API_KEY is not configured. Set it in the deployment environment."
        );
    }

    return {
        Authorization: `Bearer ${PUBLIC_API_KEY}`,
        ...extraHeaders,
    };
};

export const API_ENDPOINTS = {
    CONTACT: {
        SEND_MESSAGE: `${API_BASE_URL}/api/contact`, // POST - Send a contact message
    },
    EVENTS: {
        GET_ALL: `${API_BASE_URL}/api/events`, // GET - Retrieve all events
        GET_BY_ID: (id) => `${API_BASE_URL}/api/events/${id}`, // GET - Retrieve a single event by ID
        GET_BY_SLUG: (slug) => `${API_BASE_URL}/api/events/slug/${slug}`, // GET - Retrieve a single event by slug
        REGISTER: `${API_BASE_URL}/api/events/register`, // POST - Register for an event
    },
    SPONSORS: {
        GET_ALL: `${API_BASE_URL}/api/sponsors`, // GET - Retrieve all sponsors
    },
    TEAM: {
        GET_ALL: `${API_BASE_URL}/api/team`, // GET - Retrieve all team members
    },
    CERTIFICATES: {
        // POST - Generate a certificate. The backend now requires the admin key for this,
        // so it is proxied through our own server route which holds the key server-side.
        GENERATE: "/api/certificate/generate",
        DOWNLOAD: (certificateId) => `${API_BASE_URL}/api/certificate/download/${certificateId}?format=pdf`, // GET - Download a verified certificate (External)
        VERIFY: (certificateId) => `${API_BASE_URL}/api/certificate/verify/${certificateId}`, // GET - Verify certificate authenticity
    },
};
export const API_CONFIG = {
    TIMEOUT: 30000, // 30 seconds
    HEADERS: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
export const CONTACT_INFO = {
    EMAIL: "community@githubsrmist.in",
    WEBSITE: "https://githubsrmist.in",
};

export default {
    API_BASE_URL,
    PUBLIC_API_KEY,
    publicAuthHeaders,
    API_ENDPOINTS,
    API_CONFIG,
    CONTACT_INFO,
};
