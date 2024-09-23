import React, { useState } from 'react';
import axios from 'axios';
import ProfileCard from '@/components/Recruitments/ProfileCard';
import TimeLine from '@/components/Recruitments/TimeLine';
import EmailLogin from '@/components/Recruitments/EmailLogin';

const Submission = () => {
    const [email, setEmail] = useState('');
    const [participantData, setParticipantData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/;
        if (!emailPattern.test(email)) {
            return 'Please enter a valid @srmist.edu.in email address.';
        }
        return '';
    };

    const resetForm = () => {
        setError('');
        setParticipantData(null);
        setEmail('');
        setEmailError('');
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        const errorMessage = validateEmail(newEmail);
        setEmailError(errorMessage);
    };

    const handleLogin = async () => {
        setLoading(true);
        setError('');

        const validationError = validateEmail(email);
        if (validationError) {
            setEmailError(validationError);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get('/api/v1/recruitment/task', {
                params: { email }
            });
            setTimeout(() => {
                setParticipantData(response.data);
                setLoading(false);
            }, 2000);
        } catch (error) {
            setTimeout(() => {
                if (error.response?.status === 404) {
                    setError('Participant Not Found');
                } else {
                    setError(error.response?.data?.message || 'Failed to fetch data. Please try again.');
                }
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <div className="relative min-h-screen bg-bg_black p-6">
            {/* Loading or error overlay */}
            {(loading || error) && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg_black bg-opacity-75 z-50">
                    <div className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl">
                        <div className="bg-[#333] flex items-center p-[5px] text-white relative">
                            <div className="flex absolute left-3">
                                <span
                                    className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2 cursor-pointer"
                                    onClick={resetForm}
                                ></span>
                                <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                                <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
                            </div>
                            <div className="flex-1 text-center text-white">status</div>
                        </div>
                        <div className={`p-2.5 ${error ? 'text-red-500' : 'text-[#0f0]'}`}>
                            <div>
                                <span className="mr-2">{error ? error : 'Loading'}</span>
                                <>
                                    <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                                    <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                                    <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            {participantData ? (
                <div className="bg-bg_black flex flex-col items-center justify-center text-white p-6">
                    <ProfileCard
                        name={participantData.name}
                        regNo={participantData.regNo}
                        domain={participantData.domain}
                    />
                    <TimeLine status="taskSubmitted" />

                    <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
                        <h3 className="text-2xl font-semibold mb-4">Your Tasks</h3>
                        {participantData.tasks.length > 0 ? (
                            <ul className="space-y-2">
                                {participantData.tasks.map((task, index) => (
                                    <li key={index} className="bg-gray-700 p-4 rounded-md">
                                        <strong>{task.name}</strong>: {task.description}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-yellow-400">No tasks assigned.</p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center z-40 p-6">
                    {/* Email login at center of screen */}
                    <EmailLogin
                        email={email}
                        emailError={emailError}
                        handleEmailChange={handleEmailChange}
                        handleLogin={handleLogin}
                    />
                </div>
            )}
        </div>
    );
};

export default Submission;