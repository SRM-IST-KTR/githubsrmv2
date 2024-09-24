import React from "react";
import moniter from "@/public/moniter.svg";

const TaskCard = ({ task }) => {
    const handleTaskClick = () => {
        console.log("Task clicked");
    };
    return (
        <div
            key={task._id}
            className="group relative block w-full sm:w-96 mx-auto h-64 sm:h-80 lg:h-96 mt-8 cursor-default z-50"
        >
            <span className="absolute inset-0 rounded-xl =  z-50"></span>
            <div className="relative rounded-xl flex h-full w-full sm:w-96 transform items-end border-2 border-transparent backdrop-filter  backdrop-blur-sm bg-gray-500 bg-opacity-30 transition-transform group-hover:scale-105 z-50 drop-shadow-glow">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    <svg
                        className="w-10"
                        fill="#000000"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <g>
                                <path d="M11.905,246.817H0.27v30.385h11.636v87.014H0.27v30.385h11.636v117.398h142.473V246.817H11.905z M73.56,453.134H43.175 v-30.051H73.56V453.134z M73.56,335.734H43.175v-30.051H73.56V335.734z M123.11,453.134H92.725v-30.051h30.385V453.134z M123.11,335.734H92.725v-30.051h30.385V335.734z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M357.621,172.23l-30.385-22.362l-56.043-41.246V84l98.467-36.386L240.806,0v108.623l-56.043,41.246l-30.385,22.362 l-13.786,10.146l13.786,18.204l4.559,6.019l25.826-18.904V512h6.178h130.116h6.178V187.696l25.826,18.903l4.559-6.019 l13.786-18.204L357.621,172.23z M246.417,453.134h-30.385v-30.051h30.385V453.134z M246.417,335.734h-30.385v-30.051h30.385 V335.734z M246.417,218.335h-30.385v-30.051h30.385V218.335z M295.967,453.134h-30.385v-30.051h30.385V453.134z M295.967,335.734 h-30.385v-30.051h30.385V335.734z M295.967,218.335h-30.385v-30.051h30.385V218.335z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M500.094,364.216v-87.014h11.635v-30.385h-11.637H357.621v265.182h142.473V394.601h11.636v-30.385H500.094z M419.274,453.134h-30.385v-30.051h30.385V453.134z M419.274,335.734h-30.385v-30.051H419.274V335.734z M468.824,453.134h-30.385 v-30.051h30.385V453.134z M468.824,335.734h-30.385v-30.051h30.385V335.734z"></path>
                            </g>
                        </g>
                    </svg>
                    {/* <img
                        src="@/public/moniter.svg"
                        alt="moniter"
                        className="w-16 h-16"
                    /> */}
                    {/* <svg width="256px" height="256px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:#0DFF4E4009a;}.cls-2{fill:#0DFF4E;}</style> </defs> <g data-name="8. Monitor Screen" id="_8._Monitor_Screen"> <path class="cls-1" d="M31,18a1,1,0,0,0,1-1V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V23a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2H3a1,1,0,0,1-1-1V22H30v1a1,1,0,0,1-1,1H12a1,1,0,0,0-1,1v1.171A5.786,5.786,0,0,1,9.559,30H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2H22.441A5.788,5.788,0,0,1,21,26.171V26h8a3,3,0,0,0,3-3V21a1,1,0,0,0-1-1H2V3A1,1,0,0,1,3,2H29a1,1,0,0,1,1,1V17A1,1,0,0,0,31,18ZM20,30H12a7.787,7.787,0,0,0,1-3.829V26h6v.171A7.787,7.787,0,0,0,20,30Z"></path> <path class="cls-2" d="M19,18H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"></path> <path class="cls-2" d="M27,14H5a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z"></path> <path class="cls-2" d="M27,10H5A1,1,0,0,1,5,8H27a1,1,0,0,1,0,2Z"></path> <path class="cls-2" d="M22,6H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"></path> </g> </g></svg> */}
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                        {task.title}
                    </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-50">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl text-white">
                        {task.title}
                    </h3>
                    <p
                        className="mt-4 text-sm sm:text-base text-white
                    "
                    >
                        {task.description}
                    </p>
                    <button
                        className="cursor-pointer"
                        onClick={handleTaskClick}
                    >
                        <p className="mt-8 font-bold text-white">Submit task</p>
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
