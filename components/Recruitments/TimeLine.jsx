import React from 'react';

const TimeLine = ({ status }) => {
    // Determine which step is active based on status
    const getStepClass = (step) => {
        const steps = {
            registered: 1,
            taskSubmitted: 2,
            interviewCompleted: 3,
            onboardingCompleted: 4,
        };
        return steps[status] >= step ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500';
    };

    return (
        <div className="relative max-w-4xl mx-auto my-10">
            {/* Timeline bar (gray) */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0"></div>

            {/* Timeline bar (green, dynamic width) */}
            <div
                className="absolute top-1/2 left-0 h-1 bg-green-500 transform -translate-y-1/2 z-0 transition-all duration-700 ease-in-out"
                style={{
                    width: `${(getStepClass(1) === 'bg-green-500 text-white' ? 25 : 0) +
                        (getStepClass(2) === 'bg-green-500 text-white' ? 25 : 0) +
                        (getStepClass(3) === 'bg-green-500 text-white' ? 25 : 0) +
                        (getStepClass(4) === 'bg-green-500 text-white' ? 25 : 0)}%`
                }}
            ></div>

            <ul className="flex justify-between z-10 relative">
                <li className="flex flex-col items-center relative z-10">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center ${getStepClass(1)} transition-colors duration-500 shadow-lg`}>
                        <span className="font-bold">1</span>
                    </div>
                    <span className="block text-center mt-2 text-sm font-semibold">Register</span>
                </li>

                <li className="flex flex-col items-center relative z-10">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center ${getStepClass(2)} transition-colors duration-500 shadow-lg`}>
                        <span className="font-bold">2</span>
                    </div>
                    <span className="block text-center mt-2 text-sm font-semibold">Task Submission</span>
                </li>

                <li className="flex flex-col items-center relative z-10">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center ${getStepClass(3)} transition-colors duration-500 shadow-lg`}>
                        <span className="font-bold">3</span>
                    </div>
                    <span className="block text-center mt-2 text-sm font-semibold">Interview</span>
                </li>

                <li className="flex flex-col items-center relative z-10">
                    <div className={`rounded-full w-12 h-12 flex items-center justify-center ${getStepClass(4)} transition-colors duration-500 shadow-lg`}>
                        <span className="font-bold">4</span>
                    </div>
                    <span className="block text-center mt-2 text-sm font-semibold">Onboarding</span>
                </li>
            </ul>
        </div>
    );
};

export default TimeLine;