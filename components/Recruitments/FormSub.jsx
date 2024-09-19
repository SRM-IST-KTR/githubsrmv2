import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormSub() {
    const [formData, setFormData] = useState({
        name: "",
        registrationNo: "",
        email: "",
        phone: "",
        branch: "",
        year: "",
        position: "",
        subDomain1: "",
        subDomain2: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [subDomainOptions, setSubDomainOptions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "position") {
            updateSubDomainOptions(value);
        }
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let fieldErrors = { ...errors };

        switch (name) {
            case "email":
                const emailPattern = /^[^\s@]+@srmist\.edu\.in$/;
                if (!emailPattern.test(value)) {
                    fieldErrors.email = "Email should be in the format @srmist.edu.in";
                } else {
                    delete fieldErrors.email;
                }
                break;
            case "registrationNo":
                const regPattern = /^RA[0-9]{13}$/;
                if (!regPattern.test(value)) {
                    fieldErrors.registrationNo = "Registration Number should start with 'RA' and be 15 characters long";
                } else {
                    delete fieldErrors.registrationNo;
                }
                break;
            case "phone":
                const phonePattern = /^[0-9]{10}$/;
                if (!phonePattern.test(value)) {
                    fieldErrors.phone = "Phone number should be exactly 10 digits.";
                } else {
                    delete fieldErrors.phone;
                }
                break;
            default:
                if (!value.trim()) {
                    fieldErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
                } else {
                    delete fieldErrors[name];
                }
                break;
        }

        setErrors(fieldErrors);
    };

    const updateSubDomainOptions = (domain) => {
        if (domain === "Technical") {
            setSubDomainOptions([
                { value: 'Web-Dev', label: 'Web-Dev' },
                { value: 'App-dev', label: 'App-dev' },
                { value: 'AIML', label: 'AIML' },
                { value: 'CP', label: 'CP' }
            ]);
        } else if (domain === "Creatives") {
            setSubDomainOptions([
                { value: 'Content', label: 'Content' },
                { value: 'GD', label: 'GD' },
                { value: 'VFX', label: 'VFX' }
            ]);
        } else {
            setSubDomainOptions([]);
        }
    };

    const validateForm = () => {
        const requiredFields = ["name", "registrationNo", "email", "phone", "branch", "year", "position"];
        let isValid = true;
        let fieldErrors = { ...errors };

        requiredFields.forEach(field => {
            if (!formData[field]) {
                fieldErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
                isValid = false;
            }
        });

        // Check subdomain only if position is not "Corporate"
        if (formData.position !== "Corporate" && (!formData.subDomain1 || !formData.subDomain2)) {
            fieldErrors.subDomain1 = "Sub-domain preferences are required.";
            isValid = false;
        } else {
            delete fieldErrors.subDomain1;
        }

        setErrors(fieldErrors);
        return isValid;
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setSuccess(false);

    //     if (!validateForm()) {
    //         setLoading(false);
    //         return;
    //     }

    //     try {
    //         const response = await axios.post("/api/v1/registration/register", formData);

    //         if (response.status === 200) {
    //             setSuccess(true);
    //             toast.success("Registration successful!");
    //             console.log("Registration successful:", formData);
    //             setFormData({
    //                 name: "",
    //                 registrationNo: "",
    //                 email: "",
    //                 phone: "",
    //                 branch: "",
    //                 year: "",
    //                 position: "",
    //                 subDomain1: "",
    //                 subDomain2: "",
    //             });
    //         }
    //     } catch (err) {
    //         toast.error("An error occurred during registration.");
    //         console.error("Registration error:", err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e) => {  // Simulate an API call with setTimeout
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        // Simulate an API call with setTimeout
        setTimeout(() => {
            // Simulate success
            setSuccess(true);
            toast.success("Registration successful!");
            console.log("Registration successful:", formData);

            // Clear form data
            setFormData({
                name: "",
                registrationNo: "",
                email: "",
                phone: "",
                branch: "",
                year: "",
                position: "",
                subDomain1: "",
                subDomain2: "",
                reason: ""
            });

            setLoading(false);
        }, 2000); // Simulate a 2 second delay (API call delay)
    };

    return (
        <div id="registration-form" className="bg-bg_black">
            <div className="text-white flex flex-col p-4 md:px-8 lg:px-16 shadow-lg hover:shadow-bright_green border-[1px] border-bright_green mx-4 md:mx-10 lg:mx-60 rounded-xl md:rounded-2xl lg:rounded-3xl">
                <p className="text-white text-xl sm:text-3xl font-extrabold text-center mt-3 lg:text-4xl mb-6 md:mb-8 lg:mb-10">
                    Recruitment Form
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                        <input
                            required
                            type="text"
                            name="registrationNo"
                            placeholder="Registration No"
                            value={formData.registrationNo}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                        {errors.registrationNo && (
                            <p className="text-red-500">{errors.registrationNo}</p>
                        )}
                    </div>

                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email (@srmist.edu.in)"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                        <input
                            required
                            type="text"
                            name="phone"
                            placeholder="Phone (10 digits)"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                        <input
                            required
                            type="text"
                            name="branch"
                            placeholder="Department"
                            value={formData.branch}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3 placeholder:text-lg"
                        />
                        {errors.branch && <p className="text-red-500">{errors.branch}</p>}
                    </div>

                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                        <label className="text-sm lg:text-lg font-semibold mb-2">Year</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="border-b-2 border-gray text-white bg-bg_black outline-none py-2 px-3"
                        >
                            <option value="">Select Year</option>
                            <option value="1st">1st Year</option>
                            <option value="2nd">2nd Year</option>
                        </select>
                        {errors.year && <p className="text-red-500">{errors.year}</p>}
                    </div>

                    <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
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
                            <option value="Corporate">Corporate</option>
                        </select>
                        {errors.position && <p className="text-red-500">{errors.position}</p>}
                    </div>

                    {formData.position && formData.position !== "Corporate" && (
                        <>
                            <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                                <label className="text-sm lg:text-lg font-semibold mb-2">Sub-Domain Preference 1</label>
                                <select
                                    name="subDomain1"
                                    value={formData.subDomain1}
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
                                {errors.subDomain1 && <p className="text-red-500">{errors.subDomain1}</p>}
                            </div>

                            <div className="flex flex-col my-4 w-full px-4 md:px-8 lg:w-[80%] lg:mx-auto">
                                <label className="text-sm lg:text-lg font-semibold mb-2">Sub-Domain Preference 2</label>
                                <select
                                    name="subDomain2"
                                    value={formData.subDomain2}
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
                                {errors.subDomain2 && <p className="text-red-500">{errors.subDomain2}</p>}
                            </div>
                        </>
                    )}

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-black bg-bright_green font-semibold rounded-full py-2 px-6 w-full md:w-1/3 my-8 mx-4 md:mx-auto cursor-pointer"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>

                <ToastContainer />
            </div>
        </div>
    );
}

export default FormSub;