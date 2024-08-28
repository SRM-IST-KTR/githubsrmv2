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
        <div className="my-20 py-10 bg-bg_black text-white">
        <div className="overflow-hidden">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-bold text-center mb-8 sm:mb-10 md:mb-16">
                Frequently Asked Questions
            </h1>
            <div className="flex flex-col items-center space-y-6">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-2 rounded-2xl mx-auto transition-transform ease-in-out duration-300 transform hover:shadow-lg hover:border-bright_green"
                        style={{ borderColor: "#374151", width: "100%", maxWidth: "60%" }}
                    >
                        <div
                            className="cursor-pointer"
                            onClick={() => toggleDropdown(index)}
                        >
                            <div
                                className={`flex items-center justify-between p-2 sm:p-3 md:p-4 pl-4 sm:pl-4 md:pl-6 transition ease-in-out duration-700 ${
                                    openAnswer === index
                                        ? "bg-bright_green text-black rounded-t-2xl"
                                        : ""
                                }`}
                            >
                                <span
                                    className={`text-sm sm:text-base md:text-lg ${
                                        openAnswer === index ? "fira-code font-bold" : ""
                                    }`}
                                >
                                    {item.question}
                                </span>
                                <span className="text-base sm:text-lg md:text-xl">
                                    {openAnswer === index ? (
                                        <IoIosArrowDropupCircle />
                                    ) : (
                                        <IoIosArrowDropdownCircle />
                                    )}
                                </span>
                            </div>
                        </div>
                        {openAnswer === index && (
                            <div className="p-2 sm:p-3 md:p-4 pl-4 sm:pl-4 md:pl-6 fira-code text-white transition ease-in-out duration-300 bg-event_gray rounded-b-2xl">
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
