{
    /* 
    bright_green: "#0DFF4E"  -> added in tailwind.config.js
    border bright_green gradient -> "#00E43D"
    border dark_green gradient -> "#006600"
    */
}

import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
});

const PastEvents = ({ poster, title, certificateLink }) => {
    const GetCertificate = () => {
        if (
            !certificateLink.startsWith("http://") &&
            !certificateLink.startsWith("https://")
        ) {
            certificateLink = `https://${certificateLink}`;
        }
        window.location.href = certificateLink;
    };

    return (
        <div
            className={`block outline-2 drop-shadow-glow outline-white p-4 rounded-lg max-w-[100%] ${dmsans.className}`}
        >
            <div className="relative">
                <img
                    alt=""
                    src={poster}
                    className="h-full w-full object-cover rounded-lg border-gradient filter" //TO ADD GLOW EFFECT "drop-shadow-glow"
                />
            </div>

            <div className="flex items-center mt-4">
                <h3 className="text-lg font-bold text-white sm:text-xl py-2 px-4 pl-0">
                    {title}
                </h3>

                <button
                    onClick={GetCertificate}
                    className="ml-auto filter bg-bright_green text-black font-bold rounded h-9 w-40" //TO ADD GLOW EFFECT "drop-shadow-glow"
                >
                    Get Certificate
                </button>
            </div>

            <style jsx>{`
                .border-gradient {
                border: 5px solid transparent;
                background: linear-gradient(to bottom, #00e43d, #000000, #00e43d);
                border-image: linear-gradient(to bottom, #00e43d, #000000, #00e43d);
                border-image-slice: 1;
                }

                .drop-shadow-glow {
                // filter: drop-shadow(0 0 30px rgba(13, 255, 78, 0.4));
                transition: filter 0.3s ease-in-out;
                }

                .drop-shadow-glow:hover {
                filter: drop-shadow(0 0 30px rgba(13, 255, 78, 0.4));
                }
            `}</style>
        </div>
    );
};

export default PastEvents;
