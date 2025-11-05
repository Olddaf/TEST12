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
        className={`relative rounded overflow-hidden transition-all duration-300 ${
          isHovered ? 'scale-125 z-50 shadow-2xl -translate-y-4' : 'scale-100'
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
          <div className="absolute top-0 left-0 right-0 bg-[#181818] rounded animate-in fade-in duration-200">
            {/* Movie Image */}
            <div className="relative">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[120px] md:h-[140px] lg:h-[160px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
            </div>

            {/* Movie Info */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <h3 className="text-white font-semibold text-sm line-clamp-1">
                {movie.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                  <Play size={16} fill="black" className="text-black" />
                </button>
                <button
                  onClick={handleAddToList}
                  className={`border-2 rounded-full p-2 transition-all ${
                    isInList
                      ? 'border-white bg-white'
                      : 'border-gray-400 hover:border-white'
                  }`}
                >
                  {isInList ? (
                    <Check size={16} className="text-black" />
                  ) : (
                    <Plus size={16} className="text-white" />
                  )}
                </button>
                <button
                  onClick={handleLike}
                  className={`border-2 rounded-full p-2 transition-all ${
                    isLiked
                      ? 'border-green-500 bg-green-500'
                      : 'border-gray-400 hover:border-white'
                  }`}
                >
                  <ThumbsUp
                    size={16}
                    className={isLiked ? 'text-white' : 'text-white'}
                    fill={isLiked ? 'white' : 'none'}
                  />
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
              <div className="text-xs text-gray-400 line-clamp-1">{movie.genre}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
