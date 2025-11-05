import React, { useEffect, useRef } from 'react';
import { User, Settings, HelpCircle, LogOut } from 'lucide-react';

const ProfileDropdown = ({ onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const profiles = [
    { name: 'John Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', active: true },
    { name: 'Jane Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka', active: false },
    { name: 'Kids', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Buddy', active: false }
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-12 bg-black/95 border border-gray-700 rounded w-64 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Profiles */}
      <div className="p-2 border-b border-gray-700">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800 rounded cursor-pointer transition-colors"
          >
            <img src={profile.avatar} alt={profile.name} className="w-8 h-8 rounded" />
            <span className="text-white text-sm">{profile.name}</span>
            {profile.active && (
              <span className="ml-auto text-[#E50914] text-xs font-semibold">Active</span>
            )}
          </div>
        ))}
      </div>

      {/* Manage Profiles */}
      <div className="p-2 border-b border-gray-700">
        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800 rounded w-full text-left transition-colors">
          <User size={18} className="text-gray-400" />
          <span className="text-white text-sm">Manage Profiles</span>
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800 rounded w-full text-left transition-colors">
          <Settings size={18} className="text-gray-400" />
          <span className="text-white text-sm">Account Settings</span>
        </button>
        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800 rounded w-full text-left transition-colors">
          <HelpCircle size={18} className="text-gray-400" />
          <span className="text-white text-sm">Help Center</span>
        </button>
      </div>

      {/* Sign Out */}
      <div className="p-2 border-t border-gray-700">
        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-800 rounded w-full text-left transition-colors">
          <LogOut size={18} className="text-gray-400" />
          <span className="text-white text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
