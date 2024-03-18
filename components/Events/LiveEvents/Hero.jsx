import React from 'react'
import Image from "next/image";
import Event_error from "@/public/Event_error.svg";

// #202020 -> bg of info
import { DM_Sans } from 'next/font/google';
const dmsans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
});

const Hero = ({
    key,
    isActive,
    title,
    poster,
    date,
    location,
    timer,
    certificateLink
}) => {
    const GetCertificate = () => {
        console.log("UPCOMING EVENT BUTTON CLICKED", certificateLink);
        if (!certificateLink.startsWith('http://') && !certificateLink.startsWith('https://')) {
            certificateLink = `https://${certificateLink}`;
        }
        window.location.href = certificateLink;
    };

    if (isActive) {
        return (
            < div className={`w-screen p-4 mx-auto ${dmsans.className}`}>
                <div className="flex flex-col md:flex-row xl:mx-48 gap-16 justify-center">
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
                            <div className="h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-center items-center">
                                {date.toUpperCase()}
                            </div>

                            <div className="h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-center items-center">
                                {location.toUpperCase()}
                            </div>

                            <div className="h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-center items-center">
                                {timer.toUpperCase()}
                            </div>
                            <button
                                onClick={GetCertificate}
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
        <div className={`w-screen ${dmsans.className} flex flex-col justify-center items-center`}>
            <div className="bg-event_gray p-4 sm:p-12 md:p-16 rounded-lg sm:mb-12 lg:mb-16 w-5/6 flex flex-col items-center">
                <div>
                    <Image
                        src={Event_error}
                        alt=""
                        width={253}
                        height={253}
                        className="rounded-lg"
                    />
                </div>
                <div className="text-center sm:mt-6 md:mt-8 lg:mt-10 md:text-2xl xl:text-2xl text-xl">
                    New Fun Events Coming soon....
                </div>
            </div>
        </div>


    )
}

export default Hero