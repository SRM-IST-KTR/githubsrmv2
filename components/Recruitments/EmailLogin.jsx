import React from 'react';

const EmailLogin = ({ email, emailError, handleEmailChange, handleLogin }) => {
    return (
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Login with your SRMIST Email</h2>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your @srmist.edu.in email"
                className={`w-full p-3 rounded-lg mb-2 border ${emailError ? 'border-red-500' : 'border-gray-600'
                    } bg-gray-800 text-white focus:outline-none focus:ring-2 ${emailError ? 'focus:ring-red-500' : 'focus:ring-yellow-500'
                    }`}
            />
            {emailError && (
                <p className="text-red-500 mb-4 text-sm">{emailError}</p>
            )}
            <button
                onClick={handleLogin}
                className={`w-full py-3 ${emailError ? 'bg-gray-500 cursor-not-allowed' : 'bg-bright_green hover:bg-green-500'
                    } text-gray-900 rounded-lg font-semibold transition-all`}
                disabled={!!emailError} // Disable the button if there is an email error
            >
                Submit
            </button>
        </div>
    );
};

export default EmailLogin;