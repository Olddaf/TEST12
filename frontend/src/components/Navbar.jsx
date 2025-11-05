import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Left section */}
        <div className="flex items-center space-x-8">
          <div className="text-[#E50914] text-2xl md:text-3xl font-bold">
            NETFLIX
          </div>
          <div className="hidden md:flex items-center space-x-5">
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              TV Shows
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Movies
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              New & Popular
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              My List
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Browse by Languages
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden md:block text-white hover:text-gray-300 transition-colors text-sm">
            Kids
          </button>
          <button className="text-white hover:text-gray-300 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-[#E50914] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
          <div className="flex items-center space-x-2 cursor-pointer group">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Profile"
              className="w-8 h-8 rounded"
            />
            <ChevronDown className="text-white group-hover:rotate-180 transition-transform duration-300" size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
