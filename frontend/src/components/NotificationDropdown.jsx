import React, { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

const NotificationDropdown = ({ onClose }) => {
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

  const notifications = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300',
      title: 'New Episode Available',
      message: 'Stranger Things Season 5 Episode 1 is now available',
      time: '2 hours ago',
      isNew: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300',
      title: 'Coming Soon',
      message: 'The Witcher Season 4 premieres next week',
      time: '1 day ago',
      isNew: true
    }
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-12 bg-black/95 border border-gray-700 rounded w-96 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto scrollbar-hide"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-white font-semibold text-lg">Notifications</h3>
      </div>

      {/* Notifications */}
      <div className="divide-y divide-gray-800">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 hover:bg-gray-800 cursor-pointer transition-colors relative"
          >
            {notification.isNew && (
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#E50914] rounded-full" />
            )}
            <div className="flex space-x-3">
              <img
                src={notification.image}
                alt={notification.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm mb-1">
                  {notification.title}
                </h4>
                <p className="text-gray-400 text-xs mb-2">{notification.message}</p>
                <div className="flex items-center space-x-1 text-gray-500 text-xs">
                  <Clock size={12} />
                  <span>{notification.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-700 text-center">
        <button className="text-gray-400 hover:text-white text-sm transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
