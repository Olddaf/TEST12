import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative rounded overflow-hidden transition-all duration-300 ${
          isHovered ? 'scale-150 z-50 shadow-2xl' : 'scale-100'
        }`}
      >
        {/* Movie Poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[120px] md:h-[140px] lg:h-[160px] object-cover"
        />

        {/* Hover Card Details */}
        {isHovered && (
          <div className="absolute inset-0 bg-[#181818] flex flex-col animate-in fade-in duration-200">
            {/* Movie Image */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[120px] md:h-[140px] lg:h-[160px] object-cover"
            />

            {/* Movie Info */}
            <div className="p-3 space-y-2">
              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                  <Play size={16} fill="black" className="text-black" />
                </button>
                <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white transition-colors">
                  <Plus size={16} className="text-white" />
                </button>
                <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white transition-colors">
                  <ThumbsUp size={16} className="text-white" />
                </button>
                <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white transition-colors ml-auto">
                  <ChevronDown size={16} className="text-white" />
                </button>
              </div>

              {/* Match & Rating */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-green-500 font-semibold">{movie.match}</span>
                <span className="border border-gray-400 text-gray-400 px-1.5 py-0.5">
                  {movie.rating}
                </span>
                <span className="text-white">{movie.year}</span>
              </div>

              {/* Genre */}
              <div className="text-xs text-gray-400">{movie.genre}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
