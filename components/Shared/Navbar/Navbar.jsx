import React, { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPath = (url) => {
    return currentPath === url;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="p-5 shadow md:flex md:items-center md:justify-between mr-16 mt-4" id="menu">
      <div className={`flex justify-${mobileMenuOpen ? 'start' : 'between'} items-center`}>
          <img src="logo.png" className="h-53 w-151 pl-6 md:pl-24" alt="Logo" />
          <div className="md:hidden">
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            ) : (
              <FaBars className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            )}
          </div>
      </div>
      <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <li className="mx-4 my-6 md:my-0">
          <a href="/" className={`text-l hover:text-bright_green duration-500 ${isCurrentPath('/') ? 'text-bright_green' : ''}`} onClick={closeMobileMenu}>Home</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/team" className={`text-l hover:text-bright_green duration-500 ${isCurrentPath('/team') ? 'text-bright_green' : ''}`} onClick={closeMobileMenu}>Our Team</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/about" className={`text-l hover:text-bright_green duration-500 ${isCurrentPath('/about') ? 'text-bright_green' : ''}`} onClick={closeMobileMenu}>Our Story</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="events" className={`text-l hover:text-bright_green duration-500 ${isCurrentPath('/events') ? 'text-bright_green' : ''}`} onClick={closeMobileMenu}>Events</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="contact" className={`text-l hover:text-bright_green duration-500 ${isCurrentPath('/contact') ? 'text-bright_green' : ''}`} onClick={closeMobileMenu}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
