import React from "react";
import { Form } from "react-router-dom";

const TaskCard = ({ task, domain }) => {
    const handleTaskClick = () => {
        console.log("Task clicked");
    };

    const normalizeLink = (link) => {
        // Remove any extra quotes and check for https://
        let cleanedLink = link.replace(/^"+|"+$/g, ""); // Remove leading and trailing quotes
        if (
            !cleanedLink.startsWith("https://") &&
            !cleanedLink.startsWith("http://")
        ) {
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
                        width="80px"
                        height="80px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#4Fd403"
                        stroke-width="0.00512"
                        className="mx-auto sm:mx-0"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M15.5 8.5H15.51M10.5 7.5H10.51M7.5 11.5H7.51M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.6569 19.6569 15 18 15H17.4C17.0284 15 16.8426 15 16.6871 15.0246C15.8313 15.1602 15.1602 15.8313 15.0246 16.6871C15 16.8426 15 17.0284 15 17.4V18C15 19.6569 13.6569 21 12 21ZM16 8.5C16 8.77614 15.7761 9 15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5ZM11 7.5C11 7.77614 10.7761 8 10.5 8C10.2239 8 10 7.77614 10 7.5C10 7.22386 10.2239 7 10.5 7C10.7761 7 11 7.22386 11 7.5ZM8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5Z"
                                stroke="#4Fd403"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </g>
                    </svg>
                );

            case "Corporate":
                return (
                    <svg
                        width="80px"
                        height="80px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#4Fd403"
                        stroke-width="2"
                        className="mx-auto sm:mx-0"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M14 11.5C13.5 11.376 12.6851 11.3714 12 11.376M12 11.376C11.7709 11.3775 11.9094 11.3678 11.6 11.376C10.7926 11.4012 10.0016 11.7368 10 12.6875C9.99825 13.7004 11 14 12 14C13 14 14 14.2312 14 15.3125C14 16.1251 13.1925 16.4812 12.1861 16.5991C11.3861 16.5991 11 16.625 10 16.5M12 11.376L12 10M12 16.5995V18M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                stroke="#4Fd403"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </g>
                    </svg>
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

    const taskForm = (domain) => {
        switch (domain) {
            case "Technical":
                return "https://www.google.com";
            case "Creatives":
                return "https://forms.gle/1CMRyQnDfyXQDrFj7";
            case "Corporate":
                return "https://docs.google.com/forms/d/e/1FAIpQLSfEpy3fL_Rz_NcJBKYoqIKbXTEvz0TgR2PNPqJq_FjN0RFJiQ/viewform?usp=sf_link";
            default:
                return "";
        }
    };

    const svgIcon = getSvgByDomain(domain);
    const Form = taskForm(domain);

    return (
        <div
            key={task._id}
            className="group relative block w-full sm:w-96 mx-auto h-64 sm:h-80 lg:h-96 mt-8 cursor-default z-50"
        >
            <span className="absolute inset-0 rounded-xl z-50"></span>
            <div className="relative rounded-xl flex h-full w-full sm:w-96 transform items-end border-2 border-transparent backdrop-filter backdrop-blur-sm bg-gray-500 bg-opacity-30 transition-transform group-hover::scale-105 z-50 drop-shadow-glow">
                <div className="p-4 !pt-0 min-w-80 transition-opacity group-hover:absolute group-hover:opacity-0">
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
                                CLICK HERE
                            </a>
                        </div>
                    )}

                    {/* <button
                        className="cursor-pointer pt-4 pb-2 pl-2 sm:pb-0 sm:pl-0"
                        onClick={handleTaskClick}
                    >
                        <p className="font-bold text-black text-sm bg-[#0DFF4E] rounded-full py-1 px-2 w-32 md:w-28 sm:w-96 max-w-xs opacity-95 hover:opacity-100 transition-opacity duration-300 text-center mx-auto">
                            <a href={Form}>Submit Task</a>
                        </p>
                    </button> */}
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