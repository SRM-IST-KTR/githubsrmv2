import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const isCurrentPath = (url) => {
    return currentPath === url;
  };

  return (
    <nav className="bg-transparent top-0 pt-12 pr-24">
      <div className="flex items-center">
        <div className="flex items-center">
          <img src="logo.png" className="h-53 w-151 pl-24" alt="Logo" />
        </div>
        <div className="ml-auto">
          <a href="/" className={`ml-4 ${isCurrentPath('/') ? 'text-bright_green' : ''}`}>Home</a>
          <a href="/team" className={`ml-4 ${isCurrentPath('/team') ? 'text-bright_green' : ''}`}>Our Team</a>
          <a href="/events" className={`ml-4 ${isCurrentPath('/events') ? 'text-bright_green' : ''}`}>Events</a>
          <a href="/about" className={`ml-4 ${isCurrentPath('/about') ? 'text-bright_green' : ''}`}>Our Story</a>
          <a href="/contact" className={`ml-4 ${isCurrentPath('/contact') ? 'text-bright_green' : ''}`}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

