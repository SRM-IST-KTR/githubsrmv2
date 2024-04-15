import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const EmailDialogBox = ({ CertiOBJ, handelCloseModel }) => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('participants');
    const [emailError, setEmailError] = useState('');


    const validateEmail = (email) => {
        // Ensure email is a string before validation
        if (typeof email !== 'string') {
            return false;
        }
        return email.match(/^[^@]+@srmist\.edu\.in$/);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleGetCertificate = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        const url = CertiOBJ[role];
        console.log(url);

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Email': email
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Extract the file type from the Content-Type header
                const contentType = response.headers.get("Content-Type");
                let extension = contentType.split('/')[1]; // Typically 'pdf', 'png', etc.
                if (extension === 'jpeg') extension = 'jpg'; // Handle special cases

                return response.blob().then(blob => ({
                    blob,
                    extension
                }));
            })
            .then(({ blob, extension }) => {
                // Create a URL for the blob object
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `certificate_${role}.${extension}`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Error:', error);
                setEmailError('Failed to fetch the certificate');
            });

        setEmail('');
    };
    return (
        <div className="max-w-lg w-full p-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8 relative drop-shadow-glow">
                <button
                    className="absolute right-4 top-2  hover:text-red-700 text-red-500"
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
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="sr-only text-gray-800">Email address</label>
                            <input
                                placeholder="Enter SRMIST email"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-100 bg-gray-100 rounded-md focus:outline-none focus:ring-bright_green focus:border-bright_green focus:z-10 sm:text-sm text-black"
                                required
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="mt-4 focus:border-bright_green">
                            <Select
                                label="Select Role"
                                value={role}
                                onChange={(val) => setRole(val)}
                            >
                                <Option value="participants">Participant</Option>
                                <Option value="organizers">Organizer</Option>
                                <Option value="volunteers">Volunteer</Option>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-bright_green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            type="submit"
                        >
                            Get Certificate
                        </button>
                    </div>
                </form>
                {emailError && <p className="text-red-500 text-lg italic pt-3 font-extrabold text-center">{emailError}</p>}
            </div>
            <style jsx>{`
                .border-gradient {
                border: 5px solid transparent;
                background: linear-gradient(to bottom, #00e43d, #000000, #00e43d);
                border-image: linear-gradient(to bottom, #00e43d, #000000, #00e43d);
                border-image-slice: 1;
                }

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

export default EmailDialogBox