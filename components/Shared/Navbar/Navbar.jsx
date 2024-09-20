import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
        }
    };

    const handleNavigation = (path) => {
        setNav(false);
        document.body.style.overflow = "auto"; // Enable scrolling when navigating
        window.location.href = path;
        setCurrentPath(path);
    };

    const navItems = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "Our Team", path: "/team" },
        { id: 3, text: "Our Story", path: "/about" },
        { id: 4, text: "Events", path: "/events" },
        { id: 5, text: "Contact Us", path: "/contact" },
        { id: 6, text: "Recruitments", path: "/recruitment" }
    ];

    return (
        <div className="bg-black flex justify-between items-center h-20 py-2 mx-auto px-4 md:px-16 lg:px-16 text-white z-50 font-dmSans">
            <img src="logo.png" className="h-8 md:h-10" />
            <ul className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`p-4 font-medium m-2 cursor-pointer duration-300 
                        ${currentPath === item.path ? "text-black" : ""}
                        ${item.text === "Recruitments" 
                            ? `text-bg_black bg-bright_green px-5 rounded-full h-7 font-semibold my-2 pb-9 
                            ${currentPath === item.path ? "text-black" : "hover:bg-black hover:text-bright_green"}` 
                            : "hover:text-green-500"
                        }`}

                        onClick={() => handleNavigation(item.path)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className="block md:hidden z-50">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={`fixed md:hidden top-20 right-0 w-full h-[calc(100%-5rem)] font-semibold text-md flex flex-col justify-start items-center space-y-6 bg-black transition-transform duration-500 z-50 ${nav
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                    }`}
            >
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`p-4 w-[80%] rounded-lg duration-300 cursor-pointer font-poppins text-center first:mt-10
                        ${currentPath === item.path ? "text-black bg-bright_green" : "text-white bg-zinc-900"}
                        ${item.text === "Recruitments" 
                            ? `${currentPath === item.path ? "text-black bg-bright_green" : "hover:bg-black hover:text-white"}` 
                            : "hover:text-black"
                        }`}

                        onClick={() => handleNavigation(item.path)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
