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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "email") {
            validateEmail(value);
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

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
                setIsSubmitting(false);
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
                setIsSubmitting(false);
            });
    };

    const isFormValid =
        formData.name && formData.email && formData.message && !emailError;

    return (
        <>
   <div>
    <div className="main1 py-6 lg:py-20 sm:py-10">
        <div
            className="Qform bg-bg_black text-white flex flex-col shadow-lg 
             hover:shadow-[0_0_15px_5px_rgba(0,255,0,0.7)] border-[1px] border-bright_green mx-10 rounded-xl p-4
             lg:my-10 lg:mx-60 lg:border-2 lg:border-bright_green lg:rounded-lg lg:p-8
             sm:mx-32 sm:border-[1px] sm:border-bright_green sm:rounded-2xl sm:p-6
             mb-20"
        >
            <p
                className="text-white text-2xl font-bold text-center mt-3
              lg:text-4xl  lg:font-bold  lg:mt-8  lg:ml-8
              sm:text-3xl sm:font-bold sm:text-center sm:mt-6 "
            >
                Send Us Your Queries
            </p>
            <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2 border-gray text-white bg-bg_black outline-none w-[90%] sm:w-[70%] my-8 mx-auto"
            />
            <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-gray text-white bg-bg_black outline-none w-[90%] sm:w-[70%] my-8 mx-auto"
            />
            {emailError && (
                <p className="text-red-500 mx-auto">{emailError}</p>
            )}
            <input
                required
                type="text"
                name="message"
                placeholder="Enter Your Query"
                value={formData.message}
                onChange={handleChange}
                className="border-b-2 border-gray text-white bg-bg_black outline-none w-[90%] sm:w-[70%] my-8 mx-auto"
            />
            <button
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className={`text-black bg-bright_green font-semibold rounded-full py-2 px-4 w-[40%] sm:w-[30%] my-8 mx-auto ${
                    !isFormValid || isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                }`}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <ToastContainer />
        </div>
    </div>
</div>



        </>
    );
}

export default ContactForm;
