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
        <div className="my-20  text-white">
            <div className="overflow-hidden">
                <h1 className="text-4xl font-roboto font-bold text-center mb-16">
                    Frequently Asked Questions
                </h1>
                <div className="flex flex-col items-center">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border-2  mx-2 transition-transform ease-in-out duration-300 transform "
                            style={{ borderColor: "#374151", width: "90%" }}
                        >
                            <div
                                className={`cursor-pointer`}
                                onClick={() => toggleDropdown(index)}
                            >
                                <div
                                    className={`flex items-center justify-between p-4 transition-bg ease-in-out duration-700 ${
                                        openAnswer === index
                                            ? "bg-bright_green text-black"
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
                                    <span className={`text-xl`}>
                                        {openAnswer === index ? (
                                            <IoIosArrowDropupCircle />
                                        ) : (
                                            <IoIosArrowDropdownCircle />
                                        )}
                                    </span>
                                </div>
                            </div>
                            {openAnswer === index && (
                                <div
                                    className="p-4 fira-code text-white transition-bg ease-in-out duration-300 bg-event_gray"
                                    // style={{ backgroundColor: "#354B30" }}
                                >
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
