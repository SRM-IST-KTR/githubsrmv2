import React from "react";

const TimeLine = ({ status }) => {
    // Determine which step is active based on status
    const getStepClass = (step) => {
        const steps = {
            registered: 1,
            taskSubmitted: 2,
            interviewCompleted: 3,
            onboardingCompleted: 4
        };
        return steps[status] >= step
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-gray-500";
    };

    // Get dynamic width for the connecting line based on the status
    const getLineWidth = () => {
        const steps = {
            registered: 1,
            taskSubmitted: 2,
            interviewCompleted: 3,
            onboardingCompleted: 4
        };
        const stepCount = steps[status];
        return `${(stepCount - 0.5) * 33}%`; // Adjust to stop line in the middle of the current step
    };

    return (
        <div className="py-8">
            <div className="relative w-full max-w-full lg:max-w-6xl mx-auto px-4">
                {" "}
                {/* Increase the width constraint and centering */}
                {/* Dynamic connecting line */}
                <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-300 z-0"></div>
                <div
                    className="absolute top-3 left-0 h-0.5 bg-green-500 z-0"
                    style={{ width: getLineWidth() }}
                ></div>
                {/* Timeline Steps */}
                <div className="flex justify-between items-center relative z-10">
                    {/* Registered */}
                    <div className="flex flex-col items-center h-20 text-center w-full">
                        <div
                            className={`w-6 h-6 rounded-full ${getStepClass(
                                1
                            )}`}
                        ></div>
                        <div className="text-xs mt-2 font-semibold">
                            Registered
                        </div>
                    </div>
                    {/* Task Submitted */}
                    <div className="flex flex-col items-center  h-20 text-center w-full">
                        <div
                            className={`w-6 h-6 rounded-full ${getStepClass(
                                2
                            )}`}
                        ></div>
                        <div className="text-xs mt-2 font-semibold">
                            Task Submitted
                        </div>
                    </div>
                    {/* Interview Completed */}
                    <div className="flex flex-col items-center text-center h-20 w-full">
                        <div
                            className={`w-6 h-6 rounded-full ${getStepClass(
                                3
                            )}`}
                        ></div>
                        <div className="text-xs mt-2 font-semibold">
                            Interview Completed
                        </div>
                    </div>
                    {/* Onboarding Completed */}
                    <div className="flex flex-col items-center text-center h-20 w-full">
                        <div
                            className={`w-6 h-6 rounded-full ${getStepClass(
                                4
                            )}`}
                        ></div>
                        <div className="text-xs mt-2 font-semibold">
                            Onboarding Completed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
