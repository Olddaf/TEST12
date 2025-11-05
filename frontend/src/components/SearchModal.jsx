import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { mockMovies } from '../mockData';

const SearchModal = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      // Search through all movies
      const allMovies = [
        ...mockMovies.trending,
        ...mockMovies.netflixOriginals,
        ...mockMovies.action,
        ...mockMovies.comedy,
        ...mockMovies.horror,
        ...mockMovies.documentaries,
        ...mockMovies.romance
      ];

      const results = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto pt-20 px-4">
        {/* Search Bar */}
        <div className="bg-[#141414] border border-gray-700 rounded flex items-center px-4 py-3 mb-6">
          <Search className="text-gray-400 mr-3" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for movies, TV shows, genres..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-500"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
          {searchQuery.trim() && searchResults.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-500 text-sm mt-2">Try searching for something else</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-3">
              {searchResults.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded flex items-center p-3 cursor-pointer group"
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-32 h-20 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg group-hover:text-gray-300 transition-colors">
                      {movie.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-green-500 text-sm font-semibold">{movie.match}</span>
                      <span className="text-gray-400 text-sm">{movie.year}</span>
                      <span className="border border-gray-500 text-gray-400 px-1.5 py-0.5 text-xs">
                        {movie.rating}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{movie.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!searchQuery.trim() && (
            <div className="text-center py-20">
              <Search className="text-gray-600 mx-auto mb-4" size={48} />
              <p className="text-gray-400 text-lg">Search for movies and TV shows</p>
              <p className="text-gray-500 text-sm mt-2">Start typing to see results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
