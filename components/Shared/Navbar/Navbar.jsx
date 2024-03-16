import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent top-0 pt-12 pr-24">
      <div className="flex items-center">
        <div className="flex items-center">
          <img src=".\public\logo.png" alt="Logo" className="h-8 w-auto pl-24" />
        </div>
        <div className="ml-auto">
          <a href="/" className="text-white ml-4">Home</a>
          <a href="team" className="text-white ml-4">Our Team</a>
          <a href="index" className="text-white ml-4">Events</a>
          <a href="about" className="text-white ml-4">Our Story</a>
          <a href="contact" className="text-white ml-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
