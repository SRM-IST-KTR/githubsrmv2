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
            <span className="absolute inset-0 border-2 border-dashed border-black z-50"></span>
            <div className="relative rounded-xl flex h-full w-full sm:w-96 transform items-end border-2 border-black bg-white backdrop-filter backdrop-blur-lg transition-transform group-hover:scale-105 z-50">
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
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl text-bg_black font-poppins">
                        {task.title}
                    </h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-50">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl text-bg_black font-dmSans">
                        {task.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-bg_black font-dmSans">
                        {task.description}
                    </p>
                    <button
                        className="cursor-pointer"
                        onClick={handleTaskClick}
                    >
                        <p className="mt-8 font-bold text-bright_green font-dmSans ">
                            Submit task
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
