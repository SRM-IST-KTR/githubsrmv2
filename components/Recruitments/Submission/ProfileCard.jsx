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

    return (
        <div className="flex items-center p-3 w-96 h-32 bg-gray-500 bg-opacity-30 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-sm border border-transparent z-40">
            <section className="flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-md hover:scale-110 duration-300">
                {domain === "Technical" ? (
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
                ) : domain === "Creatives" ? (
                    <svg viewBox="0 0 15 15" className="w-7 fill-gray-700">
                        <path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"></path>
                    </svg>
                ) : (
                    <svg
                        viewBox="-5.76 -5.76 43.52 43.52"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
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
                                    {`.cls-1{fill:#0DFF4E;}.cls-2{fill:#000;}`}
                                </style>
                            </defs>
                            <g data-name="39. Office" id="_39._Office">
                                <path
                                    className="cls-1"
                                    d="M21,8H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M21,12H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M21,16H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M21,20H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M7,16H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M7,20H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M27,16H25a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-1"
                                    d="M27,20H25a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-2"
                                    d="M12,30H7a1,1,0,0,1-1-1V5A3,3,0,0,1,9,2H23a3,3,0,0,1,3,3V7a1,1,0,0,1-2,0V5a1,1,0,0,0-1-1H9A1,1,0,0,0,8,5V28h4a1,1,0,0,1,0,2Z"
                                ></path>
                                <path
                                    className="cls-2"
                                    d="M25,30H16a1,1,0,0,1,0-2h8V14a1,1,0,0,1,2,0V29A1,1,0,0,1,25,30Z"
                                ></path>
                                <path
                                    className="cls-2"
                                    d="M7,30H1a1,1,0,0,1-1-1V13a3,3,0,0,1,3-3H7a1,1,0,0,1,1,1V29A1,1,0,0,1,7,30ZM2,28H6V12H3a1,1,0,0,0-1,1Z"
                                ></path>
                                <path
                                    className="cls-2"
                                    d="M31,30H25a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1h4a3,3,0,0,1,3,3V29A1,1,0,0,1,31,30Zm-5-2h4V13a1,1,0,0,0-1-1H26Z"
                                ></path>
                                <path
                                    className="cls-2"
                                    d="M20,30a1,1,0,0,1-1-1V24H13v5a1,1,0,0,1-2,0V24a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v5A1,1,0,0,1,20,30Z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                )}
            </section>

            <section className="block border-l border-gray-300 m-3">
                <div className="pl-3">
                    <h3 className="text-white font-bold font-poppins text-xl">
                        {name}
                    </h3>
                    <h4 className="text-gray-400 font-light font-dmSans text-m">{regNo}</h4>
                    <h3 className="bg-clip-text text-transparent bg-bright_green text-lg font-dmSans">
                        {role}
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default ProfileCard;
