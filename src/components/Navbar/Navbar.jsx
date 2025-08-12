import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
   
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-3 sm:py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
      <div
        className="text-sm sm:text-base md:text-lg font-semibold cursor-pointer transition-colors hover:text-purple-400"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="text-[#8245ec]">&lt;</span>
        <span className="text-white">Ravinder</span>
        <span className="text-[#8245ec]">/</span>
        <span className="text-white">Singh</span>
        <span className="text-[#8245ec]">&gt;</span>
      </div>



        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition-colors duration-200 ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className="text-sm lg:text-base px-2 py-1 rounded hover:bg-purple-500/10"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex space-x-3">
          <a
            href="https://github.com/ravinderi12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors p-2 rounded-full hover:bg-purple-500/10"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ravinder-singh-28a7a929a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors p-2 rounded-full hover:bg-purple-500/10"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8245ec] p-2 rounded-lg hover:bg-purple-500/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="text-2xl sm:text-3xl" />
            ) : (
              <FiMenu className="text-2xl sm:text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-2 bg-[#050414] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-xl shadow-2xl border border-purple-500/20 lg:hidden">
          <ul className="flex flex-col items-center space-y-2 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full">
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full py-3 px-6 text-center hover:text-white hover:bg-purple-500/10 rounded-lg transition-all duration-200 ${
                    activeSection === item.id ? "text-[#8245ec] bg-purple-500/20" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-700 mt-4">
              <a
                href="https://github.com/ravinderi12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] p-2 rounded-full hover:bg-purple-500/10 transition-all"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ravinder-singh-28a7a929a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] p-2 rounded-full hover:bg-purple-500/10 transition-all"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
