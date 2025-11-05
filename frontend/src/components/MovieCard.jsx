import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown, Check } from 'lucide-react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInList, setIsInList] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToList = (e) => {
    e.stopPropagation();
    setIsInList(!isInList);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="relative flex-shrink-0 w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer transition-all duration-300 ease-in-out group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative rounded-md overflow-visible transition-all duration-300 ${
          isHovered ? 'scale-125 z-50' : 'scale-100'
        }`}
      >
        {/* Movie Poster - Always Visible */}
        <div className="relative rounded-md overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-[120px] md:h-[140px] lg:h-[160px] object-cover"
          />
          
          {/* Play button overlay on image (visible on hover) */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="bg-white/90 rounded-full p-3 hover:bg-white hover:scale-110 transition-all shadow-lg">
                <Play size={24} fill="black" className="text-black" />
              </button>
            </div>
          )}
        </div>

        {/* Hover Card Details - Appears Below Image */}
        {isHovered && (
          <div className="bg-[#181818] rounded-b-md shadow-2xl animate-in fade-in duration-200">
            {/* Movie Info */}
            <div className="p-3 space-y-2">
              {/* Title */}
              <h3 className="text-white font-bold text-base leading-tight line-clamp-2">
                {movie.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors shadow-md">
                  <Play size={14} fill="black" className="text-black" />
                </button>
                <button
                  onClick={handleAddToList}
                  className={`border-2 rounded-full p-2 transition-all shadow-md ${
                    isInList
                      ? 'border-white bg-white'
                      : 'border-gray-400 hover:border-white'
                  }`}
                >
                  {isInList ? (
                    <Check size={14} className="text-black" />
                  ) : (
                    <Plus size={14} className="text-white" />
                  )}
                </button>
                <button
                  onClick={handleLike}
                  className={`border-2 rounded-full p-2 transition-all shadow-md ${
                    isLiked
                      ? 'border-green-500 bg-green-500'
                      : 'border-gray-400 hover:border-white'
                  }`}
                >
                  <ThumbsUp
                    size={14}
                    className={isLiked ? 'text-white' : 'text-white'}
                    fill={isLiked ? 'white' : 'none'}
                  />
                </button>
                <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white transition-colors ml-auto shadow-md">
                  <ChevronDown size={14} className="text-white" />
                </button>
              </div>

              {/* Match & Rating */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-green-500 font-bold">{movie.match}</span>
                <span className="border border-gray-400 text-gray-400 px-1.5 py-0.5 text-[10px]">
                  {movie.rating}
                </span>
                <span className="text-gray-300">{movie.year}</span>
              </div>

              {/* Genre */}
              <div className="text-xs text-gray-400 line-clamp-1">{movie.genre}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
