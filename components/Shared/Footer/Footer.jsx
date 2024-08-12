import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col px-20 sm:px-36 bg-bg_black py-20">
      <div className="flex-grow grid justify-items-center sm:flex sm:justify-between sm:space-y-0 space-y-10">
        <div>
          <img className="w-30 h-12 sm:w-56 sm:h-16" src="Logo.png" alt="Logo" />
        </div>

        <div className="sm:space-y-2 text-white">
          <h className="flex text-center items-center">Follow Us On</h>

          <div className="flex space-x-3">
            <a href="https://www.linkedin.com/company/githubsrm/mycompany/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-7 w-7 md:h-10 md:w-10" />
            </a>
            <a href="https://www.instagram.com/githubsrm/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-7 w-7 md:h-10 md:w-10" />
            </a>
            <a href="https://twitter.com/GithubSrm" target="_blank" rel="noopener noreferrer">
              <RiTwitterXFill className="h-7 w-7 md:h-10 md:w-10" />
            </a>
            <a href="https://github.com/SRM-IST-KTR" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-7 w-7 md:h-10 md:w-10" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 mb-0 text-white">Created By GCSRM Team 🐐</p>
    </footer>
  );
};

export default Footer;
