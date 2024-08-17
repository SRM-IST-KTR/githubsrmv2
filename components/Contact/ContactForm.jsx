import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/v1/contact", formData)
            .then((response) => {
                console.log("Response:", response.data);
                toast.success("Your form has been submitted successfully!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error(
                    "There was an error submitting your form. Please try again.",
                    {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    }
                );
            });
    };

    return (
        <>
            <div>
                <div className="main1  py-6 lg:py-20 sm:py-10">
                    <div
                        className="Qform my-10 bg-bg_black text-white flex flex-col shadow-lg hover:shadow-bright_green 
                         border-[1px] border-bright_green mx-10 rounded-xl 
                         lg:my-10 lg:mx-60 lg:border-2 lg:border-bright_green lg:rounded-lg
                         sm:mx-32 sm:border-[1px] sm:border-bright_green sm:rounded-2xl"
                    >
                        <p
                            className="text-white text-2xl font-bold text-center mt-3
                          lg:text-4xl  lg:font-bold  lg:mt-8  lg:ml-8
                          sm:text-3xl sm:font-bold sm:text-center sm:mt-6 "
                        >
                            Send Us Your Queries
                        </p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none w-[50%] max-md:w-[70%] my-8 mx-10"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none w-[50%] my-8 mx-10 max-md:w-[70%]"
                        />
                        <input
                            type="text"
                            name="message"
                            placeholder="Enter Your Query"
                            value={formData.message}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none w-[90%] max-md:w-[70%] my-8 mx-10"
                        />
                        <button
                            onClick={handleSubmit}
                            className="text-black bg-bright_green
                               font-semibold rounded-full py-2 px-4 w-[15%] max-md:w-[70%] my-8 mx-10"
                        >
                            Submit
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
