import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai"; // Importing Close Icon

function TechTask() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const demoVideoInput = event.target.elements.demoVideo.value;

        try {
            const response = await fetch(demoVideoInput, {
                method: "HEAD",
                redirect: "follow"
            });
            if (
                response.url.startsWith("https://accounts.google.com/v3/signin")
            ) {
                alert(
                    "The provided link is not public. Please provide a public link."
                );
            } else {
                // Handle form submission
                console.log("Form submitted successfully");
            }
        } catch (error) {
            alert("There was an error checking the link. Please try again.");
        }
    };

    return (
        <>
            <button onClick={handleOpen}>Open Modal</button>
            <Modal open={open} onClose={handleClose}>
                <Box className="flex justify-center items-center h-screen w-screen">
                    <form
                        onSubmit={handleSubmit}
                        className="form bg-white mx-3 md:mx-10 my-3 p-4 md:p-10 px-6 md:px-16 rounded-lg space-y-4 flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-xl relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-900"
                        >
                            <AiOutlineClose />
                        </button>

                        <p className="text-center font-extrabold text-xl sm:text-2xl md:text-4xl text-bright_green mb-4 sm:mb-6">
                            Task Submission Form
                        </p>

                        {/* New Dropdown Input for Task Selection */}
                        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
                            <label className="text-sm sm:text-base md:text-lg font-normal">
                                Select Task:
                            </label>
                            <select className="rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg bg-gray-200 text-bg_black">
                                <option value="">-- Select Task --</option>
                                <option value="task1">Task 1</option>
                                <option value="task2">Task 2</option>
                                <option value="task3">Task 3</option>
                                <option value="task4">Task 4</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
                            <label className="text-sm sm:text-base md:text-lg font-normal">
                                Task Name
                            </label>
                            <input
                                className="rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg bg-gray-200 text-bg_black placeholder:text-gray-400"
                                placeholder="Write the app name"
                            />
                        </div>

                        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
                            <label className="text-sm sm:text-base md:text-lg font-normal">
                                Github Link:
                            </label>
                            <input
                                className="rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg bg-gray-200 text-bg_black placeholder:text-gray-400"
                                placeholder="Repository Link"
                            />
                        </div>

                        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
                            <label className="text-sm sm:text-base md:text-lg font-normal">
                                Deployed Link:
                            </label>
                            <input
                                className="rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg bg-gray-200 text-bg_black placeholder:text-gray-400"
                                placeholder="(optional)"
                            />
                        </div>

                        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
                            <label className="text-sm sm:text-base md:text-lg font-normal">
                                Demo Video:
                            </label>
                            <input
                                name="demoVideo"
                                className="rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg bg-gray-200 text-bg_black placeholder:text-gray-400"
                                placeholder="Drive link"
                            />
                        </div>

                        <div className="subtn mt-8 sm:mt-10 md:mt-20">
                            <button
                                type="submit"
                                className="w-full rounded-lg font-semibold text-bg_black py-2 text-base sm:text-lg md:text-xl bg-bright_green"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default TechTask;