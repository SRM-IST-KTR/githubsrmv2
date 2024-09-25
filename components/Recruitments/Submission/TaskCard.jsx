// import React from "react";

// const TaskCard = ({ task }) => {
//     const handleTaskClick = () => {
//         console.log("Task clicked");
//     };
//     return (
//         <div
//             key={task._id}
//             className="group relative block w-full sm:w-96 mx-auto h-64 sm:h-80 lg:h-96 mt-8 cursor-default z-50"
//         >
//             <span className="absolute inset-0 rounded-xl =  z-50"></span>
//             <div className="relative rounded-xl flex h-full w-full sm:w-96 transform items-end border-2 border-transparent backdrop-filter  backdrop-blur-sm bg-gray-500 bg-opacity-30 transition-transform group-hover:scale-105 z-50 drop-shadow-glow">
//                 <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
//                     <div>
//                         <svg
//                             version="1.1"
//                             id="_x32_"
//                             xmlns="http://www.w3.org/2000/svg"
//                             xmlnsXlink="http://www.w3.org/1999/xlink"
//                             viewBox="0 0 512 512"
//                             xmlSpace="preserve"
//                             width="100px"
//                             height="100px"
//                             fill="#4Fd403"
//                             stroke="#4Fd403"
//                             strokeWidth="0.00512"
//                         >
//                             <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                             <g
//                                 id="SVGRepo_tracerCarrier"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             ></g>
//                             <g id="SVGRepo_iconCarrier">
//                                 <style type="text/css">
//                                     {`.st0 { fill: #4Fd403; }`}
//                                 </style>
//                                 <g>
//                                     <path
//                                         className="st0"
//                                         d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48 C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19 S434.172,35,444.664,35z M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S363.672,35,374.164,35z M303.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S293.172,35,303.664,35z M472,464 c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z"
//                                     />
//                                     <rect
//                                         x="96"
//                                         y="192"
//                                         className="st0"
//                                         width="152"
//                                         height="32"
//                                     />
//                                     <rect
//                                         x="96"
//                                         y="352"
//                                         className="st0"
//                                         width="328"
//                                         height="32"
//                                     />
//                                     <rect
//                                         x="304"
//                                         y="192"
//                                         className="st0"
//                                         width="120"
//                                         height="120"
//                                     />
//                                     <polygon
//                                         className="st0"
//                                         points="229.042,304 248,304 248,272 96,272 96,304 213.042,304"
//                                     />
//                                 </g>
//                             </g>
//                         </svg>
//                     </div>
//                     <h2 className="mt-4 text-xl font-extrabold sm:text-xl w-80 text-white">
//                         {task.title}
//                     </h2>
//                 </div>
//                 <div className="absolute p-4 pt-20 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-50">
//                     {/* <h2 className="mt-4 text-base font-extrabold -sm:text-base text-white">
//                         {task.description}
//                     </h2> */}
//                     <p className="mt-4 sm:text-base text-white text-justify">
//                         {task.guidelines}
//                     </p>

//                     <button
//                         className="cursor-pointer pt-4 pb-0"
//                         onClick={handleTaskClick}
//                     >
//                         <p className="font-bold  text-black text-sm  bg-[#0DFF4E] rounded-full py-1 px-2 w-20 md:w-28 max-w-xs opacity-95 hover:opacity-100 transition-opacity duration-300">
//                             <a href="www.google.com">Submit</a>
//                         </p>
//                     </button>
//                 </div>
//                 <style jsx>{`
//                     .drop-shadow-glow {
//                         box-shadow: 0px 0px 10px 4px rgba(13, 255, 78, 0.1);
//                         transition: box-shadow 0.3s ease-in-out;
//                     }

//                     .drop-shadow-glow:hover {
//                         box-shadow: 0px 0px 20px 5px rgba(13, 255, 78, 0.5);
//                         transition: box-shadow 0.3s ease;
//                     }
//                 `}</style>
//             </div>
//         </div>
//     );
// };

// export default TaskCard;

import React from "react";

const TaskCard = ({ task }) => {
    const handleTaskClick = () => {
        console.log("Task clicked");
    };

    return (
        <div
            key={task._id}
            className="group relative block w-full sm:w-96 mx-auto h-64 sm:h-80 lg:h-96 mt-8 cursor-default z-50"
        >
            <span className="absolute inset-0 rounded-xl z-50"></span>
            <div className="relative rounded-xl flex h-full w-full sm:w-96 transform items-end border-2 border-transparent backdrop-filter backdrop-blur-sm bg-gray-500 bg-opacity-30 transition-transform group-hover:scale-105 z-50 drop-shadow-glow">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                    <div>
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
                    </div>
                    <h2 className="mt-4 text-lg font-extrabold sm:text-xl w-full text-white text-center sm:text-left">
                        {task.title}
                    </h2>
                </div>
                <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-4 z-50">
                    <p className="text-sm sm:text-base text-white text-justify pl-4 pr-4">
                        {task.guidelines}
                    </p>

                    <button
                        className="cursor-pointer pt-4 pb-2 pl-2 sm:pb-0 sm:pl-0"
                        onClick={handleTaskClick}
                    >
                        <p className="font-bold text-black text-sm bg-[#0DFF4E] rounded-full py-1 px-2 w-20 md:w-28 max-w-xs opacity-95 hover:opacity-100 transition-opacity duration-300 text-center mx-auto">
                            <a href="www.google.com">Submit</a>
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
