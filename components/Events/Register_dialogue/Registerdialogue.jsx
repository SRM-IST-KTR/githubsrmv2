import React, { useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";

const RegisterDialogue = ({ slug, onRegistrationClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phn: "",
        regNo: "",
        dept: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        if (!/^\d{10}$/.test(formData.phn)) {
            setError("Phone number must be 10 digits.");
            return false;
        }
        if (!/^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/.test(formData.email)) {
            setError("Email must end with @srmist.edu.in.");
            return false;
        }
        if (formData.regNo.length !== 15) {
            setError("Registration number must be 15 characters long.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            console.log("Registering for event:", slug);
            console.log("Form data:", formData);
            const response = await axios.post("/api/v1/events/register", {
                ...formData,
                slug
            });
            setLoading(false);

            if (response.status === 200) {
                setSuccess(true);
                console.log("Registration successful:", response.data);
            }
        } catch (err) {
            setLoading(false);
            setError(
                err.response?.data?.message ||
                    "An error occurred during registration."
            );
            console.error("Registration error:", err);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            {success && <Confetti />}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                <button
                    onClick={onRegistrationClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">
                    Event Registration Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={success}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            SRMIST Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={success}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone:</label>
                        <input
                            type="tel"
                            name="phn"
                            value={formData.phn}
                            onChange={handleChange}
                            required
                            disabled={success}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Registration Number:
                        </label>
                        <input
                            type="text"
                            name="regNo"
                            value={formData.regNo}
                            onChange={handleChange}
                            required
                            disabled={success}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Department:
                        </label>
                        <input
                            type="text"
                            name="dept"
                            value={formData.dept}
                            onChange={handleChange}
                            required
                            disabled={success}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}
                    <button
                        type="submit"
                        disabled={loading || success}
                        className={`w-full px-4 py-2 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
                            ${
                                loading
                                    ? "bg-gray-400"
                                    : success
                                    ? " bg-green-800 text-white"
                                    : "bg-bright_green text-black"
                            }`}
                    >
                        {loading
                            ? "Registering..."
                            : success
                            ? "Registered"
                            : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterDialogue;
