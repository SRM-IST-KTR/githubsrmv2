import React from "react";
import { FaGithub } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="grid justify-items-center sm:flex sm:justify-between sm:space-y-0 space-y-10 p-20 sm:p-36 ">
      <div>
      <img className="w-30 h-12 sm:w-56 sm:h-16" src="Logo.png"/>
      </div>
      

      <div className="sm:space-y-2">
        <h className="flex sm:justify-start mb-3">Follow us on </h>

        <div className="flex space-x-3">
          <a href="https://www.linkedin.com/company/githubsrm/mycompany/"><FaLinkedin className="h-7 w-7 md:h-10 md:w-10" /></a>
          <a href="https://www.instagram.com/githubsrm/?hl=en"><FaInstagram className="h-7 w-7 md:h-10 md:w-10" /></a>
          <a href="https://twitter.com/GithubSrm"><FaXTwitter className="h-7 w-7 md:h-10 md:w-10" /></a>
          <a href="https://github.com/SRM-IST-KTR"><FaGithub className="h-7 w-7 md:h-10 md:w-10" /></a>
        </div>
        
      </div>

    </footer>
    <p className="flex justify-center mb-10">Created by GCSRM Team 🐐</p>
    </>
  );
};

export default Footer;
