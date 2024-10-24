import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailDialogBox = ({ CertiOBJ, title, handelCloseModel }) => {
    const [formData, setFormData] = useState({
        email: "",
        type: "",
        event: title
    });
    const [emailError, setEmailError] = useState("");
    const [certificate, setCertificate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const validateEmail = (email) => {
        if (typeof email !== "string") {
            return false;
        }
        return email.match(/^[^@]+@srmist\.edu\.in$/);
    };

    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    };

    const handleRoleChange = (event) => {
        setFormData({ ...formData, type: event.target.value });
    };

    const handleGetCertificate = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError("Please enter a valid SRMIST email address.");
            return;
        }
        setEmailError("");
        setIsButtonDisabled(true);
        try {
            setIsLoading(true);
            const response = await axios.post("/api/v1/certificates", formData);

            if (response.data && response.data.success) {
                setCertificate(response.data.certificate);
                toast.success("Certificate generated successfully!");
            } else {
                toast.error(
                    response.data.error || "Failed to generate certificate"
                );
                setIsButtonDisabled(false);
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.error || "Error getting certificate";
            toast.error(errorMessage);
            setIsButtonDisabled(false);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (certificate) {
            const link = document.createElement("a");
            link.href = certificate;
            link.download = `${title}_certificate.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.error("Certificate not available for download");
        }
    };

    useEffect(() => {
        setCertificate(null);
        setIsButtonDisabled(false);
    }, [formData.email, formData.type]);

    return (
        <div className="max-w-lg w-full p-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8 relative drop-shadow-glow">
                <button
                    className="absolute right-4 top-2 hover:text-red-700 text-red-500"
                    onClick={handelCloseModel}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-center text-3xl font-extrabold text-bright_green">
                    Get Your Certificate!
                </h2>
                <form
                    className="mt-8 space-y-6"
                    onSubmit={handleGetCertificate}
                >
                    <div className="rounded-md">
                        <div>
                            <label htmlFor="email" className="text-gray-800">
                                Email address
                            </label>
                            <input
                                placeholder="Enter SRMIST email"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-100 bg-gray-100 rounded-md focus:outline-none focus:ring-bright_green focus:border-bright_green focus:z-10 text-black mb-8 mt-2 font-semibold"
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                id="email"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <label className="text-gray-800 mt-8">Roles</label>
                        <div className="mt-4 focus:border-bright_green">
                            <select
                                className="relative w-full px-3 py-3 border border-gray-100 bg-gray-100 rounded-md focus:ring-bright_green focus:border-bright_green text-black font-semibold"
                                value={formData.type}
                                onChange={handleRoleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Role
                                </option>
                                <option value="participants">
                                    Participant
                                </option>
                                <option value="organizers">Organizer</option>
                                <option value="volunteers">Volunteer</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-bold rounded-md text-gray-900 bg-bright_green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            type="submit"
                            disabled={
                                certificate || isLoading || isButtonDisabled
                            }
                        >
                            {isLoading ? "Generating..." : "Get Certificate"}
                        </button>
                        <button
                            type="button"
                            onClick={handleDownload}
                            disabled={!certificate || isLoading}
                            className={`${
                                certificate
                                    ? "group relative w-full flex justify-center py-3 px-4 border border-transparent font-bold rounded-md text-gray-900 bg-bright_green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4"
                                    : "mt-4 group relative w-full flex justify-center py-3 px-4 border border-transparent font-bold rounded-md text-gray-900 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-not-allowed"
                            }`}
                        >
                            Download Certificate
                        </button>
                    </div>
                </form>
                {emailError && (
                    <p className="text-red-500 text-lg italic pt-3 font-extrabold text-center">
                        {emailError}
                    </p>
                )}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <style jsx>{`
                .drop-shadow-glow {
                    filter: drop-shadow(0 0 30px rgba(13, 255, 78, 0.4));
                    transition: filter 0.3s ease-in-out;
                }

                .drop-shadow-glow:hover {
                    filter: drop-shadow(0 0 26px rgba(13, 255, 78, 0.9));
                }
            `}</style>
        </div>
    );
};

export default EmailDialogBox;
