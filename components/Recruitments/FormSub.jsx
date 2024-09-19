import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function FormSub() {
    const [formData, setFormData] = useState({
        name: "",
        registrationNo: "",
        email: "",
        srmEmail: "", 
        phone: "",
        branch: "",
        year: "",
        position: "",
        subd:"",
        reason: ""
    });
    const [emailError, setEmailError] = useState("");
    const [subDomainOptions, setSubDomainOptions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "email" || name === "srmEmail") {
            validateEmail(value);
        }

        if (name === "position") {
            updateSubDomainOptions(value);
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

    const updateSubDomainOptions = (domain) => {
        switch (domain) {
            case 'Technical':
                setSubDomainOptions([
                    { value: 'Web-Dev', label: 'Web-Dev' },
                    { value: 'App-dev', label: 'App-dev' },
                    { value: 'AIML', label: 'AIML' },
                    { value: 'CP', label: 'CP' }
                ]);
                break;
            case 'Creatives':
                setSubDomainOptions([
                    { value: 'Content', label: 'Content' },
                    { value: 'GD', label: 'GD' },
                    { value: 'VFX', label: 'VFX' }
                ]);
                break;
            case 'Coorporate':
                setSubDomainOptions([
                    { value: 'Ops', label: 'Ops' },
                    { value: 'Sponsership', label: 'Sponsership' },
                    { value: 'PR', label: 'PR' }
                ]);
                break;
            default:
                setSubDomainOptions([]);
                break;
        }
    };

    const isFormValid =
        formData.name &&
        formData.registrationNo &&
        formData.email &&
        formData.srmEmail &&
        formData.phone &&
        formData.branch &&
        formData.year &&
        formData.position &&
        formData.subd &&
        formData.reason &&
        !emailError;

    return (
        <div>
            <div className="main1 py-6 lg:py-20 sm:py-10 bg-bg_black">
                <div
                    className="Qform my-10 bg-bg_black text-white flex flex-col space-y-14 px-16 shadow-lg hover:shadow-bright_green 
                     border-[1px] border-bright_green mx-10 rounded-xl 
                     lg:my-10 lg:mx-60 lg:border-2 lg:border-bright_green lg:rounded-3xl
                     sm:mx-32 sm:border-[1px] sm:border-bright_green sm:rounded-2xl"
                >
                    <p
                        className="text-white text-3xl font-semibold text-center mt-3
                      lg:text-5xl  lg:font-semibold  lg:mt-8  lg:ml-8 mb-10 
                      sm:text-4xl sm:font-semibold sm:text-center sm:mt-6 "
                    >
                        Recruitment Form
                    </p>

                   
                    <div className="flex flex-col  my-4 mx-10 w-[90%] max-md:w-[70%]">
                       
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                    </div>

                    
                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                       
                        <input
                            required
                            type="text"
                            name="registrationNo"
                            placeholder="Registration No"
                            value={formData.registrationNo}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                    </div>

                    
                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                        
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg "
                        />
                    </div>

                    
                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                       
                        <input
                            required
                            type="email"
                            name="srmEmail"
                            placeholder="SRM Email"
                            value={formData.srmEmail}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg "
                        />
                    </div>
                    {emailError && (
                        <p className="text-red-500 mx-10">{emailError}</p>
                    )}

                   
                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                        
                        <input
                            required
                            type="text"
                            name="phone"
                            placeholder="Phone (WhatsApp)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg "
                        />
                    </div>

                    
                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                       
                        <input
                            required
                            type="text"
                            name="branch"
                            placeholder="Department"
                            value={formData.branch}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg "
                        />
                    </div>

                   
                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                <label className="text-sm lg:text-lg font-semibold mb-2">Year</label>
                <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3"
                >
                    <option value="">Select Year</option>
                    <option value="Technical">1st Year</option>
                    <option value="Creatives">2nd Year</option>
                    
                </select>
            </div>

                    <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                <label className="text-sm lg:text-lg font-semibold mb-2">Domain</label>
                <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3"
                >
                    <option value="">Select Domain</option>
                    <option value="Technical">Technical</option>
                    <option value="Creatives">Creatives</option>
                    <option value="Coorporate">Coorporate</option>
                </select>
            </div>

            <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                <label className="text-sm lg:text-lg font-semibold mb-2">Sub-Domain</label>
                <select
                    name="subd"
                    value={formData.subd}
                    onChange={handleChange}
                    className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3"
                >
                    <option value="">Select Sub-Domain</option>
                    {subDomainOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col my-4 mx-10 w-[90%] max-md:w-[70%]">
                <label className="text-sm lg:text-lg font-semibold mb-2">Sub-Domain</label>
                <select
                    name="subd"
                    value={formData.subd}
                    onChange={handleChange}
                    className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3"
                >
                    <option value="">Select Sub-Domain</option>
                    {subDomainOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

          
           

                  
                   
                 <div className="btn flex justify-center">

                 
                    <button
                        disabled={!isFormValid}
                        className={`text-black bg-bright_green  font-semibold rounded-full py-2 px-4 w-[15%] max-md:w-[70%] my-8 mx-10 ${
                            !isFormValid
                                ? "text-bg_black cursor-not-allowed"
                                : ""
                        }`}
                    >
                        Submit
                    </button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default FormSub;

