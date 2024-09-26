import React from "react";

const ProfileCard = ({ name, regNo, domain }) => {
    // Function to determine the role based on domain
    const getRoleByDomain = (domain) => {
        switch (domain) {
            case "Technical":
                return "Developer";
            case "Creatives":
                return "Artist";
            case "Corporate":
                return "Business Analyst";
            default:
                return "Business";
        }
    };

    const role = getRoleByDomain(domain);

    const getSvgByDomain = (domain) => {
        switch (domain) {
            case "Technical":
                return (
                    <svg
                        width="180px"
                        height="180px"
                        viewBox="-5.76 -5.76 43.52 43.52"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        stroke="#000000"
                        strokeWidth="0.192"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <defs>
                                <style>
                                    .cls-1 {"{"}fill:#0DFF4E;{"}"}
                                </style>
                            </defs>
                            <title></title>
                            <rect
                                className="cls-1"
                                height="30"
                                rx="3"
                                ry="3"
                                width="30"
                                x="1"
                                y="1"
                            ></rect>
                            <path d="M31,7V4a3,3,0,0,0-3-3H4A3,3,0,0,0,1,4V7Z"></path>
                            <path
                                className="cls-1"
                                d="M26,5h-.5a1,1,0,0,1,0-2H26a1,1,0,0,1,0,2Z"
                            ></path>
                            <path
                                className="cls-1"
                                d="M22,5h-.5a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"
                            ></path>
                            <path d="M10,24a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,0-1.42l4-4a1,1,0,0,1,1.42,1.42L7.41,19l3.3,3.29a1,1,0,0,1,0,1.42A1,1,0,0,1,10,24Z"></path>
                            <path d="M22,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L24.59,19l-3.3-3.29a1,1,0,0,1,1.42-1.42l4,4a1,1,0,0,1,0,1.42l-4,4A1,1,0,0,1,22,24Z"></path>
                            <path d="M14,26a1.25,1.25,0,0,1-.32-.05,1,1,0,0,1-.63-1.27l4-12a1,1,0,1,1,1.9.64l-4,12A1,1,0,0,1,14,26Z"></path>
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
                        viewBox="-5.76 -5.76 43.52 43.52"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        stroke="#000000"
                        stroke-width="0.096"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <defs>
                                {" "}
                                <style>
                                    .cls-1 {"{"}fill:#0DFF4E;{"}"}
                                    .cls-2 {"{"}fill:#000;{"}"}
                                </style>{" "}
                            </defs>{" "}
                            <g data-name="39. Office" id="_39._Office">
                                {" "}
                                <path
                                    class="cls-1"
                                    d="M21,8H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M21,12H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M21,16H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M21,20H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M7,16H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M7,20H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M27,16H25a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-1"
                                    d="M27,20H25a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-2"
                                    d="M12,30H7a1,1,0,0,1-1-1V5A3,3,0,0,1,9,2H23a3,3,0,0,1,3,3V7a1,1,0,0,1-2,0V5a1,1,0,0,0-1-1H9A1,1,0,0,0,8,5V28h4a1,1,0,0,1,0,2Z"
                                ></path>{" "}
                                <path
                                    class="cls-2"
                                    d="M25,30H16a1,1,0,0,1,0-2h8V14a1,1,0,0,1,2,0V29A1,1,0,0,1,25,30Z"
                                ></path>{" "}
                                <path
                                    class="cls-2"
                                    d="M7,30H1a1,1,0,0,1-1-1V13a3,3,0,0,1,3-3H7a1,1,0,0,1,1,1V29A1,1,0,0,1,7,30ZM2,28H6V12H3a1,1,0,0,0-1,1Z"
                                ></path>{" "}
                                <path
                                    class="cls-2"
                                    d="M31,30H25a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1h4a3,3,0,0,1,3,3V29A1,1,0,0,1,31,30Zm-5-2h4V13a1,1,0,0,0-1-1H26Z"
                                ></path>{" "}
                                <path
                                    class="cls-2"
                                    d="M20,30a1,1,0,0,1-1-1V24H13v5a1,1,0,0,1-2,0V24a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v5A1,1,0,0,1,20,30Z"
                                ></path>{" "}
                            </g>{" "}
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

    const svgIcon = getSvgByDomain(domain);

    return (
        <div className="flex items-center w-96 h-32 bg-gray-500 bg-opacity-30 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-sm border border-transparent z-40">
            <section className="flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-md hover:scale-110 duration-300">
                {svgIcon}
            </section>

            <section className="block border-l border-gray-300 m-3">
                <div className="pl-3">
                    <h3 className="text-white font-bold font-poppins text-xl">
                        {name}
                    </h3>
                    <h4 className="text-gray-400 font-light font-dmSans text-m">
                        {regNo}
                    </h4>
                    <h3 className="bg-clip-text text-transparent bg-bright_green text-lg font-dmSans">
                        {role}
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default ProfileCard;
