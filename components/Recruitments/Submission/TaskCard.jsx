import React from "react";

const TaskCard = ({ task, domain }) => {
    const handleTaskClick = () => {
        console.log("Task clicked");
    };

    const normalizeLink = (link) => {
        // Remove any extra quotes and check for https://
        let cleanedLink = link.replace(/^"+|"+$/g, ''); // Remove leading and trailing quotes
        if (!cleanedLink.startsWith("https://") && !cleanedLink.startsWith("http://")) {
            cleanedLink = `https://${cleanedLink}`; // Add https:// if missing
        }
        return cleanedLink;
    };

    const getSvgByDomain = (domain) => {
        switch (domain) {
            case "Technical":
                return (
                    <svg
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        width="80px"
                        height="80px"
                        fill="#4Fd403"
                        stroke="#4Fd403"
                        strokeWidth="0.00512"
                        className="mx-auto sm:mx-0"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <style type="text/css">
                                {`.st0 { fill: #4Fd403; }`}
                            </style>
                            <g>
                                <path
                                    className="st0"
                                    d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48 C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19 S434.172,35,444.664,35z M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S363.672,35,374.164,35z M303.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S293.172,35,303.664,35z M472,464 c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z"
                                />
                                <rect
                                    x="96"
                                    y="192"
                                    className="st0"
                                    width="152"
                                    height="32"
                                />
                                <rect
                                    x="96"
                                    y="352"
                                    className="st0"
                                    width="328"
                                    height="32"
                                />
                                <rect
                                    x="304"
                                    y="192"
                                    className="st0"
                                    width="120"
                                    height="120"
                                />
                                <polygon
                                    className="st0"
                                    points="229.042,304 248,304 248,272 96,272 96,304 213.042,304"
                                />
                            </g>
                        </g>
                    </svg>
                );
            case "Creatives":
                return (
                    <svg
                        width="180px"
                        height="180px"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                );

            case "Corporate":
                return (
                    <svg
                        width="180px"
                        height="180px"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                );
            default:
                return (
                    <svg
                        width="180px"
                        height="180px"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#D3D3D3" />
                    </svg>
                );
        }
    };

    const svgIcon = getSvgByDomain(domain);

    return (
        <div
            key={task._id}
            className="group relative block w-full sm:w-96 mx-auto h-64 sm:h-80 lg:h-96 mt-8 cursor-default z-50"
        >
            <span className="absolute inset-0 rounded-xl z-50"></span>
            <div className="relative rounded-xl flex h-full w-full sm:w-96 transform items-end border-2 border-transparent backdrop-filter backdrop-blur-sm bg-gray-500 bg-opacity-30 transition-transform group-hover::scale-105 z-50 drop-shadow-glow">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                    {svgIcon}
                    <h2 className="mt-4 text-lg font-extrabold sm:text-xl w-full text-white text-center sm:text-left font-poppins">
                        {task.title}
                    </h2>
                </div>
                {/* Updated details section with overflow and scroll behavior */}
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity group-hover:opacity-100 group-hover:relative bg-opacity-90 rounded-xl p-4 overflow-y-auto max-h-full sm:max-h-80 lg:max-h-96 z-50">
                    <h2 className="mt-2 mb-4 text-base font-bold text-white text-justify pl-4 pr-4 font-poppins">
                        {task.description}
                    </h2>
                    <h3 className="pl-4 pr-4 mb-2 font-extrabold text-sm">
                        Guidelines:
                    </h3>
                    <p className="text-sm sm:text-base text-white text-justify pl-4 pr-4 font-dmSans">
                        {task.guidelines}
                    </p>

                    {/* Conditionally render the reference link if available */}
                    {task["link"] && (
                        <div className="mt-4">
                            <h4 className="pl-4 pr-4 mb-2 font-extrabold text-sm">
                                Reference Link:
                            </h4>
                            <a
                                href={task["link"]}
                                className="text-blue-400 underline pl-4 pr-4 text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {task["link"]}
                            </a>
                        </div>
                    )}

                    <button
                        className="cursor-pointer pt-4 pb-2 pl-2 sm:pb-0 sm:pl-0"
                        onClick={handleTaskClick}
                    >
                        <p className="font-bold text-black text-sm bg-[#0DFF4E] rounded-full py-1 px-2 w-32 md:w-28 sm:w-96 max-w-xs opacity-95 hover:opacity-100 transition-opacity duration-300 text-center mx-auto">
                            <a href="www.google.com">Submit Task</a>
                        </p>
                    </button>
                </div>
                <style jsx>{`
                    .drop-shadow-glow {
                        box-shadow: 0px 0px 10px 4px rgba(13, 255, 78, 0.1);
                        transition: box-shadow 0.3s ease-in-out;
                    }

                    .drop-shadow-glow:hover {
                        box-shadow: 0px 0px 20px 5px rgba(13, 255, 78, 0.5);
                        transition: box-shadow 0.3s ease;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default TaskCard;