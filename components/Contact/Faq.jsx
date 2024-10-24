import React, { useState } from "react";
import faqData from "./faqData";
import {
    IoIosArrowDropdownCircle,
    IoIosArrowDropupCircle
} from "react-icons/io";

const Faq = () => {
    const [openAnswer, setOpenAnswer] = useState(null);

    const toggleDropdown = (index) => {
        setOpenAnswer(openAnswer === index ? null : index);
    };

    return (
        <div className="my-20 py-10  text-white font-dmSans">
            <div className="overflow-hidden">
                <h1 className="text-4xl font-poppins font-bold text-center mb-16">
                    Frequently Asked Questions
                </h1>
                <div className="flex flex-col items-center space-y-4 ">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className=" font-dmSans border-2 rounded-2xl mx-auto transition-transform ease-in-out duration-300 transform hover:shadow-lg hover:border-bright_green w-4/5 md:w-3/5"
                            style={{ borderColor: "#374151" }}
                        >
                            <div
                                className="cursor-pointer"
                                onClick={() => toggleDropdown(index)}
                            >
                                <div
                                    className={`flex items-center justify-between p-4 pl-6 transition ease-in-out duration-700 ${
                                        openAnswer === index
                                            ? "bg-bright_green text-black rounded-t-2xl"
                                            : ""
                                    }`}
                                >
                                    <span
                                        className={`text-lg ${
                                            openAnswer === index
                                                ? "fira-code font-bold"
                                                : ""
                                        }`}
                                    >
                                        {item.question}
                                    </span>
                                    <span className="text-xl">
                                        {openAnswer === index ? (
                                            <IoIosArrowDropupCircle />
                                        ) : (
                                            <IoIosArrowDropdownCircle />
                                        )}
                                    </span>
                                </div>
                            </div>
                            {openAnswer === index && (
                                <div className="p-4 pl-6 fira-code text-white transition ease-in-out duration-300 bg-event_gray rounded-b-2xl">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
