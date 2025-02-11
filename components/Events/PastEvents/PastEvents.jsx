"use client";
{
    /* 
    bright_green: "#0DFF4E"  -> added in tailwind.config.js
    border bright_green gradient -> "#00E43D"
    border dark_green gradient -> "#006600"
    */
}

const PastEvents = ({
    poster,
    title,
    certificateLink,
    onButtonClick,
    openModal }) => {

    const handleButtonClick = () => {
        openModal(certificateLink); // Pass the certificateLink 
    };

    return (
        <div
            className="block outline-2 drop-shadow-glow outline-white p-4 rounded-lg max-w-[100%] font-dmSans"
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
                    onClick={() => {
                        handleButtonClick();
                    }}
                    className="ml-auto filter bg-bright_green text-black font-bold rounded h-9 w-40 font-dmSans" //TO ADD GLOW EFFECT "drop-shadow-glow"
                >
                    Get Certificate
                </button>
            </div>

            <style jsx>{`
                .border-gradient {
                border: 5px solid transparent;
                background: linear-gradient(to bottom, #00e43d, #000000, #00e43d);
                border-image: linear-gradient(to bottom, #00e43d, #000000, #00e43d);
                filter: drop-shadow(0 0 26px rgba(13, 255, 78, 0.1));
                border-image-slice: 1;
                }

                .drop-shadow-glow:hover {
                filter: drop-shadow(0 0 26px rgba(13, 255, 78, 0.6));
                transition: filter 0.3s ease-in-out;
                }
            `}</style>
        </div >
    );
};

export default PastEvents;
