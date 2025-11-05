import React from 'react';
import { Play, Info } from 'lucide-react';
import { heroBanner } from '../mockData';

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] md:h-[90vh] w-full">
      {/* Background Image with Gradient Overlays */}
      <div className="absolute inset-0">
        <img
          src={heroBanner.backdrop}
          alt={heroBanner.title}
          className="w-full h-full object-cover"
        />
        {/* Multiple gradient overlays for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#141414]" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-4 md:px-12 max-w-2xl space-y-4 md:space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
            {heroBanner.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center space-x-3 text-sm md:text-base">
            <span className="text-green-500 font-semibold">98% Match</span>
            <span className="text-white">{heroBanner.year}</span>
            <span className="border border-gray-400 text-gray-400 px-2 py-0.5 text-xs">
              {heroBanner.rating}
            </span>
            <span className="text-white">{heroBanner.seasons}</span>
          </div>

          {/* Genre */}
          <div className="text-white text-sm md:text-base font-medium">
            {heroBanner.genre}
          </div>

          {/* Description */}
          <p className="text-white text-sm md:text-lg font-normal leading-relaxed max-w-xl drop-shadow-lg">
            {heroBanner.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 pt-2">
            <button className="flex items-center space-x-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded hover:bg-white/90 transition-all duration-300 font-semibold text-sm md:text-base shadow-lg">
              <Play size={20} fill="black" />
              <span>Play</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-500/50 transition-all duration-300 font-semibold text-sm md:text-base shadow-lg backdrop-blur-sm">
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fade to content area */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />
    </div>
  );
};

export default HeroBanner;
