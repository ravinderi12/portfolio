import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "work" },
  { name: "Education", id: "education" },
];

const SOCIAL_LINKS = [
  { 
    icon: <FaLinkedin />, 
    link: "https://www.linkedin.com/in/ravinder-singh-28a7a929a/",
    label: "LinkedIn"
  },
  { 
    icon: <FaFacebook />, 
    link: import.meta.env.VITE_FACEBOOK_URL || "#",
    label: "Facebook"
  },
  { 
    icon: <FaTwitter />, 
    link: import.meta.env.VITE_TWITTER_URL || "#",
    label: "Twitter"
  },
  { 
    icon: <FaInstagram />, 
    link: import.meta.env.VITE_INSTAGRAM_URL || "#",
    label: "Instagram"
  },
  { 
    icon: <FaYoutube />, 
    link: import.meta.env.VITE_YOUTUBE_URL || "#",
    label: "YouTube"
  },
];

const Footer = () => {
  // Smooth scroll to section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-6 px-4 sm:py-8 sm:px-6 md:px-8 lg:px-16 xl:px-20 bg-[#0f0f1a]">
      <div className="container mx-auto text-center">
        {/* Logo or Name */}
        <h2 className="text-xl font-semibold text-purple-500">Ravinder Singh</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-4">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-xs sm:text-sm md:text-base px-2 py-1 rounded transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-6">
          {SOCIAL_LINKS
            .filter(item => item.link !== "#")
            .map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-lg sm:text-xl md:text-2xl hover:text-purple-500 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-purple-500/10"
              >
                {item.icon}
              </a>
            ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Ravinder Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
