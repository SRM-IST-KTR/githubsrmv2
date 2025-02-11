import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="relative">
            <footer className="flex flex-col md:px-10 bg-gradient-to-t from-green-950 to-bg_black  pb-10">
                <div className="flex-grow grid mb-4 px-8 sm:px-24 sm:flex sm:justify-between lg:-mt-10 sm:items-center space-y-4 sm:space-y-0">
                    <div className="pr-7 sm:pr-0 text-center sm:text-left flex flex-col items-center justify-center lg:justify-start lg:items-start ml-4">
                        <div className="flex items-center justify-center">
                            <img
                            className="h-[45px] md:h-[60px] lg:h-[65px] mb-3"
                            src="Logo.png"
                            alt="Logo"
                            />
                            </div>
                        <p className="text-zinc-400 text-center font-dmSans lg:text-xl">
                            SRM Institute of Science & Technology,
                        </p>
                        <p className="text-zinc-400 text-center font-dmSans lg:text-xl">
                            Kattankulathur, Chennai 603203
                        </p>
                        <p className="text-zinc-400 font-dmSans lg:text-xl">India</p>
                    </div>

                    <div className="text-white text-center ">
                        <h2 className="flex justify-center text-center font-poppins mb-1 sm:justify-start lg:text-xl">
                            Follow Us On
                        </h2>

                        <div className="flex justify-center space-x-3 lg:mr-5">
                            <a
                                href="https://www.linkedin.com/company/githubsrm/mycompany/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white hover:text-green-500" />
                            </a>
                            <a
                                href="https://www.instagram.com/githubsrm/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white hover:text-green-500" />
                            </a>
                            <a
                                href="https://twitter.com/GithubSrm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiTwitterXFill className="h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white hover:text-green-500" />
                            </a>
                            <a
                                href="https://github.com/SRM-IST-KTR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white hover:text-green-500" />
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-1 sm:mt-8 mb-0 text-white font-poppins font-medium">
                    Created By GCSRM Team 🐐
                </p>
            </footer>
        </div>
    );
};

export default Footer;
