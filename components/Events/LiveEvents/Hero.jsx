import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Event_error from "@/public/Event_error.svg";

// #202020 -> bg of info

const Hero = ({
    key,
    isActive,
    title,
    poster,
    date,
    location,
    registrationCloseTime,
    registrationLink,
    openRegisterDialogue,
}) => {
    const Registration_Link = () => {
        console.log("UPCOMING EVENT BUTTON CLICKED", registrationLink);
        let newregistrationLink = registrationLink;
        if (!newregistrationLink.startsWith('http://') && !newregistrationLink.startsWith('https://')) {
            newregistrationLink = `https://${newregistrationLink}`;
        }
        window.open(newregistrationLink, '_blank');
    };

    const handleRegisterButtonClick = () => {
        console.log("Get Certificate button clicked")
        openRegisterDialogue();
    }

    // Calculate time left on the server-side
    const calculateTimeLeft = () => {
        const difference = new Date(registrationCloseTime) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                // seconds: Math.floor((difference / 1000) % 60)
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

    if (isActive) {
        return (
            < div className="w-screen p-4 lg:mx-auto font-dmSans">
                <div className="flex flex-col md:flex-row xl:mx-48 gap-4 lg:gap-16 justify-center">
                    <div className="relative group">
                        <div className="rounded-lg">
                            <img //USE img TAG IF LINK IS PROVIDED
                                src={poster}
                                alt="Upcoming Event"
                                className="rounded-lg lg:w-[682px] lg:h-[526px]"
                            />
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="my-auto">
                        <div className="md:w-[447px] font-bold text-xl space-y-4 sm:space-y-8 text-white">
                            <div className="h-20 lg:h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-center items-center">
                                {(date.split("T")[0]).toUpperCase()}
                            </div>

                            <div className="h-20 lg:h-28  lg:w-[447px] bg-event_gray rounded-lg text-center flex items-center justify-center">
                                {location.toUpperCase()}
                            </div>

                            <div className="h-20 lg:h-28  lg:w-[447px] w-full bg-event_gray rounded-lg text-center flex justify-center items-center">
                                {timerComponents.length ? timerComponents : <span>Registration closed</span>}
                            </div>
                            <button
                                // onClick={Registration_Link}
                                onClick={handleRegisterButtonClick}
                                className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-bold w-full rounded-lg p-4 text-3xl"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    else return (
        <div className="w-screen flex flex-col font-dmSans justify-center items-center overflow-hidden">
            <div className="bg-event_gray p-4 sm:p-12 md:p-16 rounded-lg sm:mb-12 lg:mb-16 w-5/6 flex flex-col items-center">
                <div>
                    <Image
                        src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
                        alt=""
                        width={253}
                        height={253}
                        className="rounded-lg"
                    />
                </div>
                <div className="text-center sm:mt-6 md:mt-8 lg:mt-10 md:text-2xl font-dmSans xl:text-2xl text-xl text-white">
                    New Fun Events Coming soon....
                </div>
            </div>
        </div>


    )
}

export default Hero