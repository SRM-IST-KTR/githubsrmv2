import React from 'react'
import Image from "next/image";
import current_event from "@/public/current_event.png";
import Event_error from "@/public/Event_error.png";

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
    timer
}) => {
    if (title) {
        return (
            <div className={`w-screen p-4 mb-16 ${dmsans.className}`}>
                <div className="flex flex-col md:flex-row p-4 xl:mx-52 gap-4">
                    <div className="font-serif">
                        <div className="xl:pl-10 relative group">
                            <div className="rounded-lg">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/ea69/5937/2d0ba426506ee31eb9f73d09f81e8c1e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FC4aflQ4xaOm8GdnX2JdjhDPY24ywS5cIxZCI4Z7f9Qyz~iWgry9AFIrNF5WUmoT06mZJ16Nk6W866C9oHzApXHzlERE~35qkrvxrp5xzBjr1ESff78WqxcTblOINdu2~2sGtN2XbdplmMVDX79lfzaNGStFhkcN2UnklaYQKK-5zhqIRopGuKEltLlcuRXi4WxT7JLFSXMdoYChOk2ErE6SIzfTBMLzKjLaYOl3nyQyN-1zMeEcSuMTIkyO20rUaqSS1SGmbIPi9Nw0uaRtT~prdDQK4qKljJnqRBoliYic9e~8o8NTqY1DbNc7fnkbMAC3s8~NPlQi5R-utpfrtQ__"
                                    alt=""
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="w-full font-bold text-xl space-y-10">
                        <div className="h-32 w-full bg-event_gray rounded-lg flex justify-center items-center">
                            {date.toUpperCase()}
                        </div>

                        <div className="h-32 w-full bg-event_gray rounded-lg flex justify-center items-center">
                            {location.toUpperCase()}
                        </div>

                        <div className="h-32 w-full bg-event_gray rounded-lg flex justify-center items-center">
                            {timer.toUpperCase()}
                        </div>
                        <button className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-bold h-9 w-full rounded-lg">Get Certificates</button>
                    </div>

                </div>
            </div>
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