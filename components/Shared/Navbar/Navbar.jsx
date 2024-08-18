import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  };

  const handleNavigation = (path) => {
    setNav(false);
    document.body.style.overflow = 'auto'; // Enable scrolling when navigating
    window.location.href = path;
    setCurrentPath(path);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Our Team', path: '/team' },
    { id: 3, text: 'Our Story', path: '/about' },
    { id: 4, text: 'Events', path: '/events' },
    { id: 5, text: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-20 py-2 mx-auto px-4 md:px-16 lg:px-16 text-white z-50'>
      <img src="logo.png" className='h-12' />
      <ul className='hidden md:flex space-x-6'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4  hover:text-[#0DFF4E] m-2 cursor-pointer duration-300 ${currentPath === item.path ? 'text-[#0DFF4E]' : ''}`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden z-50'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`fixed md:hidden top-0 left-0 w-full h-[calc(100%-5rem)] font-extrabold text-xl flex flex-col justify-center items-center space-y-6 bg-black transition-transform duration-500 z-50 ${nav ? 'transform translate-y-20' : 'transform -translate-y-full'
          }`}
      >
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 rounded-xl duration-300 hover:text-[#0DFF4E] cursor-pointer border-gray-600 ${currentPath === item.path ? 'text-[#0DFF4E]' : ''}`}
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
