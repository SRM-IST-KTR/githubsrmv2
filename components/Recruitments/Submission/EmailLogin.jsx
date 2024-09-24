import React from "react";

const EmailLogin = ({ email, emailError, handleEmailChange, handleLogin }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-40 p-4 sm:p-6">
            <div className="w-full max-w-sm sm:max-w-md justify-center bg-gray-800 bg-opacity-40 rounded-lg shadow-lg p-4 sm:p-6 text-white backdrop-filter backdrop-blur-lg border border-gray-800 domain-box drop-shadow-glow">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
                    Login with your SRMIST Email
                </h2>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your @srmist.edu.in email"
                    className={`w-full p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 border ${
                        emailError
                            ? "border-red-500"
                            : "border-gray-800 bg-opacity-50"
                    } bg-gray-800 bg-opacity-50 text-white focus:outline-none focus:ring-2 ${
                        emailError
                            ? "focus:ring-red-500"
                            : "focus:ring-gray-800"
                    }`}
                />
                {emailError && (
                    <p className="text-red-500 mb-3 sm:mb-4 text-sm">
                        {emailError}
                    </p>
                )}
                <button
                    onClick={handleLogin}
                    className={`w-full py-2 sm:py-3 ${
                        emailError
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-bright_green hover:bg-green-500"
                    } text-gray-900 rounded-lg font-semibold transition-all`}
                    disabled={!!emailError} // Disable the button if there is an email error
                >
                    Submit
                </button>
                <style jsx>{`
                    .drop-shadow-glow {
                        box-shadow: 0px 0px 10px 4px rgba(13, 255, 78, 0.1);
                        transition: box-shadow 0.3s ease-in-out;
                    }

                    .drop-shadow-glow:hover {
                        box-shadow: 0px 0px 20px 5px rgba(13, 255, 78, 0.5);
                        transition: box-shadow 0.3s ease;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default EmailLogin;
