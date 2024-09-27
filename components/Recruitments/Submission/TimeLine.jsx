import React from "react";

// Step mapping for easier control
const steps = [
    { id: 1, key: "registered", label: "Registered" },
    { id: 2, key: "taskSubmitted", label: "Task Submitted" },
    { id: 3, key: "interviewShortlisted", label: "Interview Shortlisted" },
    { id: 4, key: "onboarding", label: "Onboarding" }
];

// Helper function to get current step index from status
const getCurrentStep = (status) => {
    const stepIndex = steps.findIndex((step) => step.key === status);
    return stepIndex + 1; // Adding 1 to convert index to step count
};

// Helper function to determine the step class (active, future)
const getStepClass = (currentStep, stepId) => {
    if (stepId < currentStep) {
        return "bg-green-500 text-white"; // Completed steps
    } else if (stepId === currentStep) {
        return "bg-green-500 text-white"; // Current step
    } else {
        return "bg-gray-300 text-gray-500"; // Future steps
    }
};

// Helper function for calculating the dynamic width for the connecting line
const getLineWidth = (currentStep) => {
    return `${(currentStep - 1) * 50}%`; // Correct line length between completed steps
};

const TimeLineStep = ({ step, currentStep }) => (
    <div className="flex flex-col items-center h-20 text-center w-full">
        <div
            className={`w-6 h-6 rounded-full ${getStepClass(
                currentStep,
                step.id
            )}`}
        ></div>
        <div className="text-xs mt-2 font-semibold">{step.label}</div>
    </div>
);

const TimeLine = ({ status }) => {
    const currentStep = getCurrentStep(status);

    return (
        <div className="py-8">
            <div className="relative w-full max-w-full lg:max-w-6xl mx-auto px-4 font-bold text-xl">
                {/* Dynamic connecting line */}
                <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-300 z-0"></div>
                <div
                    className="absolute top-3 left-0 h-0.5 bg-green-500 z-0"
                    style={{ width: getLineWidth(currentStep) }}
                ></div>

                {/* Timeline Steps */}
                <div className="flex justify-between items-center relative z-10">
                    {steps.map((step) => (
                        <TimeLineStep
                            key={step.key}
                            step={step}
                            currentStep={currentStep}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
