import React, { useState, useEffect } from "react";
import Image from "next/image";
import recruitmentpos from "@/public/RecruitmentPoster.png";
import Event_error from "@/public/Event_error.svg";
import {
    MdDateRange,
    MdLocationPin,
    MdOutlineAccessTimeFilled
} from "react-icons/md";

// #202020 -> bg of info

const Hero = () => {
    const targetDate = "2024-09-27T23:59:59"; // Ensure this matches the event start date and time
    // Calculate time left on the server-side
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60)
                // Seconds: Math.floor((difference / 1000) % 60)
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
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="mx-2">
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    const scrollToAnchor = () => {
        const anchorElement = document.getElementById("registration-form"); // Replace with your target element's ID
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="w-screen -translate-y-6 sm:-translate-y-20 p-5 sm:p-0 lg:mx-auto">
            <div className="flex flex-col justify-center items-center md:flex-row xl:mx-48 gap-4 lg:gap-16">
                <div className="relative group pt-4">
                    <div className="rounded-lg">
                        <Image //USE img TAG IF LINK IS PROVIDED
                            src={recruitmentpos}
                            alt="Upcoming Event"
                            className="rounded-lg w-[400px] sm:w-[526px]"
                        />
                    </div>
                    {/* <h3 className="text-sm font-bold max-md:text-center text-white sm:text-xl py-4 max-md:hidden px-4 pl-0">
                        Recruitments
                    </h3> */}
                </div>

                {/* INFO */}
                <div className="my-auto">
                    <div className="md:w-[447px] font-dmSans font-medium text-md sm:text-xl space-y-4 sm:space-y-8 text-white">
                        <div className="h-[60px] sm:h-20 lg:h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-start items-center px-7">
                            <MdDateRange className="mr-4 size-[30px] sm:size-[40px] text-bright_green" />
                            <p>{targetDate.split("T")[0].toUpperCase()}</p>
                        </div>

                        <div className="h-[60px] sm:h-20 lg:h-28  lg:w-[447px] w-full bg-event_gray rounded-lg text-center flex justify-start items-center px-7">
                            {timerComponents.length ? (
                                <div className=" flex justify-start items-center">
                                    <MdOutlineAccessTimeFilled className="mr-1 size-[30px] sm:size-[40px] text-bright_green" />
                                    {timerComponents}
                                </div>
                            ) : (
                                <span className="text-red-500">
                                    Registration closed
                                </span>
                            )}
                        </div>

                        <button
                            className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-dmSans font-semibold w-full rounded-lg p-3 sm:p-5 text-xl"
                            onClick={scrollToAnchor}
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
