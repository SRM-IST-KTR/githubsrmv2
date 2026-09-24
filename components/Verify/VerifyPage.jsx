import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { API_ENDPOINTS, publicAuthHeaders } from "@/utils/config";

const STATE_IDLE = "idle";
const STATE_LOADING = "loading";
const STATE_VALID = "valid";
const STATE_NOT_FOUND = "not_found";
const STATE_TAMPERED = "tampered";
const STATE_REVOKED = "revoked";
const STATE_ERROR = "error";

const formatDate = (isoDate) => {
    if (!isoDate) {
        return "N/A";
    }

    try {
        return new Date(isoDate).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    } catch (error) {
        return isoDate;
    }
};

const normalizeStateFromResponse = (statusCode, payload) => {
    if (statusCode === 404) {
        return STATE_NOT_FOUND;
    }

    const status = payload?.status;

    if (status === STATE_TAMPERED) {
        return STATE_TAMPERED;
    }

    if (status === STATE_REVOKED) {
        return STATE_REVOKED;
    }

    if (payload?.verified === true || status === STATE_VALID) {
        return STATE_VALID;
    }

    return STATE_ERROR;
};

const buildDisplayData = (certificate = {}) => ({
    participantName: certificate.participantName || "N/A",
    eventName: certificate.eventName || "N/A",
    certificateType: certificate.certificateType || "N/A",
    issueDate: formatDate(certificate.issueDate),
    certificateId: certificate.certificateId || "N/A",
});

const VerifyPage = ({ initialCertificateId = "" }) => {
    const router = useRouter();
    const [queryId, setQueryId] = useState(initialCertificateId);
    const [status, setStatus] = useState(STATE_IDLE);
    const [securityMessage, setSecurityMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [certificate, setCertificate] = useState(null);

    const isLoading = status === STATE_LOADING;

    const headingText = useMemo(() => {
        if (status === STATE_VALID) {
            return "Certificate Verified";
        }

        if (status === STATE_NOT_FOUND) {
            return "Certificate Not Found";
        }

        if (status === STATE_TAMPERED) {
            return "Security Alert: Tampered Certificate";
        }

        if (status === STATE_REVOKED) {
            return "Certificate Revoked";
        }

        if (status === STATE_ERROR) {
            return "Verification Failed";
        }

        if (status === STATE_LOADING) {
            return "Verifying Certificate";
        }

        return "Verify Certificate";
    }, [status]);

    const verifyCertificate = async (rawId) => {
        const certificateId = (rawId || "").trim();

        if (!certificateId) {
            setStatus(STATE_IDLE);
            setErrorMessage("");
            setSecurityMessage("");
            setCertificate(null);
            return;
        }

        setStatus(STATE_LOADING);
        setErrorMessage("");
        setSecurityMessage("");
        setCertificate(null);

        try {
            const response = await fetch(
                API_ENDPOINTS.CERTIFICATES.VERIFY(encodeURIComponent(certificateId)),
                {
                    method: "GET",
                    headers: publicAuthHeaders({ Accept: "application/json" }),
                }
            );

            let payload = null;
            try {
                payload = await response.json();
            } catch (error) {
                payload = null;
            }

            const normalizedState = normalizeStateFromResponse(response.status, payload);
            setStatus(normalizedState);

            if (payload?.certificate) {
                setCertificate(buildDisplayData(payload.certificate));
            }

            if (payload?.security?.message) {
                setSecurityMessage(payload.security.message);
            }

            if (!response.ok && payload?.message) {
                setErrorMessage(payload.message);
            }
        } catch (error) {
            setStatus(STATE_ERROR);
            setErrorMessage("We could not reach the verification service. Please try again.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmed = queryId.trim();
        if (!trimmed) {
            return;
        }

        await router.push(`/verify/${encodeURIComponent(trimmed)}`, undefined, {
            shallow: true,
        });
        await verifyCertificate(trimmed);
    };

    const resetSearch = () => {
        setQueryId("");
        setStatus(STATE_IDLE);
        setCertificate(null);
        setErrorMessage("");
        setSecurityMessage("");
        router.push("/verify", undefined, { shallow: true });
    };

    useEffect(() => {
        const routeId = initialCertificateId || router.query.id;
        if (typeof routeId === "string" && routeId.trim()) {
            setQueryId(routeId);
            verifyCertificate(routeId);
        }
    }, [initialCertificateId, router.query.id]);

    const showResultCard =
        status === STATE_VALID ||
        status === STATE_NOT_FOUND ||
        status === STATE_TAMPERED ||
        status === STATE_REVOKED ||
        status === STATE_ERROR;

    return (
        <>
            <Head>
                <title>Verify Certificate | GitHub Community SRM</title>
                <meta
                    name="description"
                    content="Verify GitHub Community SRM certificates using the secure verification endpoint."
                />
            </Head>

            <main className="bg-bg_black text-white px-4 sm:px-8 lg:px-16 py-10 md:py-16 min-h-[70vh]">
                <section className="max-w-4xl mx-auto" aria-live="polite">
                    <div className="border border-bright_green/70 rounded-2xl bg-black p-6 md:p-10 transition-shadow duration-300 hover:shadow-[0_0_30px_2px_rgba(13,255,78,0.45)]">
                        <header className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="GitHub Community SRM Logo"
                                className="h-10 w-10 rounded-md object-contain bg-zinc-900 p-1"
                                onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                }}
                            />
                            <p className="font-dmSans font-semibold text-zinc-200">
                                GitHub Community SRM
                            </p>
                        </header>

                        <h1 className="mt-6 text-3xl sm:text-4xl font-bold font-poppins">
                            Certificate <span className="text-bright_green">Verification</span>
                        </h1>
                        <p className="mt-2 text-zinc-300 font-dmSans">
                            Verify authenticity using the certificate ID issued by the community.
                        </p>

                        <form
                            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Paste certificate ID (e.g. qwerty-xxxx-abCdEf)"
                                value={queryId}
                                onChange={(event) => setQueryId(event.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-bg_black text-white font-dmSans outline-none focus:border-bright_green"
                                aria-label="Certificate ID"
                            />
                            <button
                                type="submit"
                                className="text-black bg-bright_green font-dmSans font-bold text-base rounded-full py-3 px-6 min-w-[132px] transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading || !queryId.trim()}
                            >
                                {isLoading ? "Verifying..." : "Verify"}
                            </button>
                        </form>

                        {isLoading && (
                            <div className="mt-5 flex items-center gap-3 font-dmSans text-zinc-200" role="status">
                                <span className="loading-pulse" />
                                <p>Running signature and revocation checks...</p>
                            </div>
                        )}

                        {showResultCard && (
                            <article
                                className={`mt-7 rounded-2xl border p-5 md:p-6 result-fade ${status === STATE_VALID
                                    ? "border-bright_green/70 bg-bg_black"
                                    : status === STATE_NOT_FOUND
                                        ? "border-yellow-500/60 bg-[#15130b]"
                                        : "border-red-500/70 bg-[#1a0d0d]"
                                    }`}
                            >
                                <h2 className="font-poppins text-2xl font-bold mb-4">{headingText}</h2>

                                {status === STATE_VALID && (
                                    <>
                                        <div className="verified-pill">
                                            <span className="rounded-full h-6 w-6 grid place-items-center bg-bright_green text-black font-black">
                                                ✓
                                            </span>
                                            <span className="font-dmSans font-semibold">
                                                Authenticity Confirmed
                                            </span>
                                        </div>

                                        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="rounded-xl border border-zinc-700 bg-zinc-950/60 p-3">
                                                <dt className="font-dmSans text-xs uppercase tracking-wide text-zinc-400">
                                                    Participant
                                                </dt>
                                                <dd className="mt-1 font-poppins font-semibold break-words">
                                                    {certificate?.participantName}
                                                </dd>
                                            </div>
                                            <div className="rounded-xl border border-zinc-700 bg-zinc-950/60 p-3">
                                                <dt className="font-dmSans text-xs uppercase tracking-wide text-zinc-400">
                                                    Event
                                                </dt>
                                                <dd className="mt-1 font-poppins font-semibold break-words">
                                                    {certificate?.eventName}
                                                </dd>
                                            </div>
                                            <div className="rounded-xl border border-zinc-700 bg-zinc-950/60 p-3">
                                                <dt className="font-dmSans text-xs uppercase tracking-wide text-zinc-400">
                                                    Type
                                                </dt>
                                                <dd className="mt-1 font-poppins font-semibold break-words">
                                                    {certificate?.certificateType}
                                                </dd>
                                            </div>
                                            <div className="rounded-xl border border-zinc-700 bg-zinc-950/60 p-3">
                                                <dt className="font-dmSans text-xs uppercase tracking-wide text-zinc-400">
                                                    Issue Date
                                                </dt>
                                                <dd className="mt-1 font-poppins font-semibold break-words">
                                                    {certificate?.issueDate}
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2 rounded-xl border border-zinc-700 bg-zinc-950/60 p-3">
                                                <dt className="font-dmSans text-xs uppercase tracking-wide text-zinc-400">
                                                    Certificate ID
                                                </dt>
                                                <dd className="mt-1 font-poppins font-semibold break-words">
                                                    {certificate?.certificateId}
                                                </dd>
                                            </div>
                                        </dl>
                                    </>
                                )}

                                {status === STATE_NOT_FOUND && (
                                    <>
                                        <p className="font-dmSans text-yellow-100">
                                            No certificate matches this ID. Please check the ID and try again.
                                        </p>
                                        <button
                                            type="button"
                                            className="mt-4 border border-zinc-600 px-5 py-2 rounded-full font-dmSans font-semibold hover:border-bright_green hover:text-bright_green transition-colors"
                                            onClick={resetSearch}
                                        >
                                            Try another ID
                                        </button>
                                    </>
                                )}

                                {status === STATE_TAMPERED && (
                                    <>
                                        <p className="font-dmSans text-red-100">
                                            This document appears altered. The digital signature check failed and this certificate cannot be trusted.
                                        </p>
                                        {securityMessage && (
                                            <p className="mt-2 font-dmSans text-red-200">{securityMessage}</p>
                                        )}
                                    </>
                                )}

                                {status === STATE_REVOKED && (
                                    <>
                                        <p className="font-dmSans text-red-100">
                                            This certificate has been revoked by the issuer and is no longer valid.
                                        </p>
                                        {securityMessage && (
                                            <p className="mt-2 font-dmSans text-red-200">{securityMessage}</p>
                                        )}
                                    </>
                                )}

                                {status === STATE_ERROR && (
                                    <p className="font-dmSans text-red-100">
                                        {errorMessage || "Unexpected response from verification service."}
                                    </p>
                                )}
                            </article>
                        )}
                    </div>
                </section>
            </main>

            <style jsx>{`
                .loading-pulse {
                    width: 10px;
                    height: 10px;
                    border-radius: 999px;
                    background: #0dff4e;
                    box-shadow: 0 0 15px rgba(13, 255, 78, 0.85);
                    animation: pulse 1.2s ease-out infinite;
                }

                .verified-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    border: 1px solid rgba(13, 255, 78, 0.65);
                    background: rgba(13, 255, 78, 0.1);
                    color: #d8ffe7;
                    animation: pop 180ms ease-out;
                }

                .result-fade {
                    animation: fadeIn 220ms ease-out;
                }

                @keyframes pulse {
                    0% {
                        transform: scale(0.95);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.15);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0.95);
                        opacity: 0.7;
                    }
                }

                @keyframes pop {
                    from {
                        transform: scale(0.95);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default VerifyPage;
