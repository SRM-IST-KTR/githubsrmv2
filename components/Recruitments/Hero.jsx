import React, { useState, useEffect } from "react";
import Image from "next/image";
import recruitmentpos from "@/public/RecruitmentPoster.png";
import {
    MdDateRange,
    MdLocationPin,
    MdOutlineAccessTimeFilled
} from "react-icons/md";

// #202020 -> bg of info

const Hero = () => {
    const targetDate = "2024-09-27T23:59:59"; // Ensure this matches the event start date and time

    // Calculate time left for the countdown
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) return;

        timerComponents.push(
            <span key={interval} className="mx-2">
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    const scrollToAnchor = () => {
        const anchorElement = document.getElementById("registration-form");
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const goToTask = () => {
        window.location.href = "/registration/submission";
    };

    const isRegistrationClosed = Object.keys(timeLeft).length === 0;

    return (
        <div className="w-screen -translate-y-6 sm:-translate-y-20 p-5 sm:p-0 lg:mx-auto">
            <div className="flex flex-col justify-center items-center md:flex-row xl:mx-48 gap-4 lg:gap-16">
                <div className="relative group pt-4">
                    <div className="rounded-lg">
                        <Image
                            src={recruitmentpos}
                            alt="Upcoming Event"
                            className="rounded-lg w-[400px] sm:w-[526px]"
                        />
                    </div>
                </div>

                {/* INFO */}
                <div className="my-auto">
                    <div className="md:w-[447px] font-dmSans font-medium text-md sm:text-xl space-y-4 sm:space-y-8 text-white">
                        <div className="h-[60px] sm:h-20 lg:h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-start items-center px-7">
                            <MdDateRange className="mr-4 size-[30px] sm:size-[40px] text-bright_green" />
                            <p>{targetDate.split("T")[0].toUpperCase()}</p>
                        </div>

                        <div className="h-[60px] sm:h-20 lg:h-28 lg:w-[447px] w-full bg-event_gray rounded-lg text-center flex justify-start items-center px-7">
                            {timerComponents.length ? (
                                <div className="flex justify-start items-center">
                                    <MdOutlineAccessTimeFilled className="mr-1 size-[30px] sm:size-[40px] text-bright_green" />
                                    {timerComponents}
                                </div>
                            ) : (
                                <span className="text-red-500">Registration closed</span>
                            )}
                        </div>

                        {/* Show the Register Now button only if registration is still open */}
                        {!isRegistrationClosed && (
                            <button
                            onClick={!isRegistrationClosed ? handleRegisterButtonClick : null}
                            disabled={isRegistrationClosed}
                            className={`ml-auto filter font-dmSans font-semibold w-full rounded-lg p-3 sm:p-5 text-xl ${isRegistrationClosed
                                    ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                                    : "bg-bright_green hover:bg-green-700 text-black"
                                }`}
                        >
                            {isRegistrationClosed ? "Registration Closed" : "Register Now"}
                        </button>
                        )}

                        {/* Show the Tasks Coming Soon button only if registration is closed */}
                        {isRegistrationClosed && (
                            <button
                                onClick={goToTask}
                                disabled
                                className={`ml-auto filter font-dmSans font-semibold w-full rounded-lg p-3 sm:p-5 text-xl ${isRegistrationClosed
                                    ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                                    : "bg-bright_green hover:bg-green-700 text-black"
                                }`}
                        >
                            {isRegistrationClosed ? "Tasks coming soon" : "Get Task"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;