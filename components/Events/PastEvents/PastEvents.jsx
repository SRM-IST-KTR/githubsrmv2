{/* 
bright_green: "#0DFF4E"  -> added in tailwind.config.js
border bright_green gradient -> "#00E43D"
border dark_green gradient -> "#006600"
*/}

import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
});

const PastEvents = ({
    poster,
    title,
    certificateLink,
}) => {

    const GetCertificate = () => {
        if (!certificateLink.startsWith('http://') && !certificateLink.startsWith('https://')) {
            certificateLink = `https://${certificateLink}`;
        }
        window.location.href = certificateLink;
    };


    return (
        <div className={`block outline-2 outline-white p-4 rounded-lg max-w-[100%] ${dmsans.className}`}>
            <div className="relative">
                <img
                    alt=""
                    src={poster}
                    className="h-full w-full object-cover rounded-lg border-gradient filter drop-shadow-glow"
                />
            </div>

            <div className="flex items-center mt-4">
                <h3 className="text-lg font-bold text-white sm:text-xl py-2 px-4 pl-0">{title}</h3>

                <button
                    onClick={GetCertificate}
                    className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-bold rounded h-9 w-40"
                >
                    Get Certificate
                </button>
            </div>

            <style jsx>{`
                .border-gradient {
                    border: 5px solid transparent;
                    background: linear-gradient(to bottom, #00E43D, #006600, #00E43D);
                    border-image: linear-gradient(to bottom, #00E43D, #006600, #00E43D);
                    border-image-slice: 1;
                }

                .drop-shadow-glow {
                    filter: drop-shadow(0 0 30px rgba(13, 255, 78, 0.5));
                }
            `}</style>
        </div>
    );
};

export default PastEvents;
