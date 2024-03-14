import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="grid justify-items-center sm:flex sm:justify-between sm:space-y-0 space-y-10 p-20 sm:p-36 ">
      <div>
      <img className="w-30 h-12 sm:w-56 sm:h-16" src="Logo.png"/>
      </div>
      

      <div className="sm:space-y-2">
        <h className="flex sm:justify-start mb-3">Follow us on</h>
        <div className="flex space-x-3">
          <a>
          <img className="h-6 w-6 md:h-10 md:w-10" src="linkden.png"/>
          </a>
          <a><img className="h-6 w-6 md:h-10 md:w-10" src="instagram_logo.png"/></a>
          <a><img className="h-6 w-6 md:h-10 md:w-10" src="x_logo.png"/></a>
          <a><img className="h-6 w-6 md:h-10 md:w-10" src="github_logo.png"/></a>
        </div>
      </div>

    </footer>
    <p className="flex justify-center mb-10">Created by GCSRM Team 🐐</p>
    </>
  );
};

export default Footer;
