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
    poster,
    title,
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

    if (title) {
        return (
            < div className={`w-screen p-4 mx-auto ${dmsans.className}`}>
                <div className="flex flex-col md:flex-row xl:mx-48 gap-16 justify-center">
                    <div className="relative group">
                        <div className="rounded-lg">
                            <Image //USE img TAG IF LINK IS PROVIDED
                                // src="https://s3-alpha-sig.figma.com/img/ea69/5937/2d0ba426506ee31eb9f73d09f81e8c1e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FC4aflQ4xaOm8GdnX2JdjhDPY24ywS5cIxZCI4Z7f9Qyz~iWgry9AFIrNF5WUmoT06mZJ16Nk6W866C9oHzApXHzlERE~35qkrvxrp5xzBjr1ESff78WqxcTblOINdu2~2sGtN2XbdplmMVDX79lfzaNGStFhkcN2UnklaYQKK-5zhqIRopGuKEltLlcuRXi4WxT7JLFSXMdoYChOk2ErE6SIzfTBMLzKjLaYOl3nyQyN-1zMeEcSuMTIkyO20rUaqSS1SGmbIPi9Nw0uaRtT~prdDQK4qKljJnqRBoliYic9e~8o8NTqY1DbNc7fnkbMAC3s8~NPlQi5R-utpfrtQ__"
                                src={poster}
                                alt="Upcoming Event"
                                className="rounded-lg lg:w-[682px]"
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
        <div className={`mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-8 sm:p-12 md:p-16 bg-event_gray ${dmsans.className} flex flex-col items-center justify-center rounded-md mb-8 sm:mb-12 lg:mb-16`}>
            <div>
                <Image
                    src={Event_error}
                    alt=""
                    width={253}
                    height={253}
                    className="rounded-lg"
                />
            </div>
            <div className="text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                New Fun Events Coming soon....
            </div>
        </div>
    )
}

export default Hero