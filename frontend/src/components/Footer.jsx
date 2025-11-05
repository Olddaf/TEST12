import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-12 mt-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-3">
            <a href="#" className="block text-sm hover:underline">
              Audio Description
            </a>
            <a href="#" className="block text-sm hover:underline">
              Investor Relations
            </a>
            <a href="#" className="block text-sm hover:underline">
              Legal Notices
            </a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block text-sm hover:underline">
              Help Center
            </a>
            <a href="#" className="block text-sm hover:underline">
              Jobs
            </a>
            <a href="#" className="block text-sm hover:underline">
              Cookie Preferences
            </a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block text-sm hover:underline">
              Gift Cards
            </a>
            <a href="#" className="block text-sm hover:underline">
              Terms of Use
            </a>
            <a href="#" className="block text-sm hover:underline">
              Corporate Information
            </a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block text-sm hover:underline">
              Media Center
            </a>
            <a href="#" className="block text-sm hover:underline">
              Privacy
            </a>
            <a href="#" className="block text-sm hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Service Code Button */}
        <button className="border border-gray-600 text-gray-400 px-4 py-2 text-sm hover:text-white hover:border-white transition-colors mb-8">
          Service Code
        </button>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          <p>© 2025 Netflix Clone. Made with Emergent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
