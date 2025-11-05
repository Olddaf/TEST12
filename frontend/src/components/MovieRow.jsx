import React, { useRef, useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth * 0.8;
      const newScrollLeft =
        direction === 'left'
          ? rowRef.current.scrollLeft - scrollAmount
          : rowRef.current.scrollLeft + scrollAmount;

      rowRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        checkArrows();
      }, 300);
    }
  };

  const checkArrows = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0);
      setShowRightArrow(
        rowRef.current.scrollLeft <
          rowRef.current.scrollWidth - rowRef.current.offsetWidth - 10
      );
    }
  };

  useEffect(() => {
    checkArrows();
  }, []);

  return (
    <div
      className="px-4 md:px-12 py-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Row Title */}
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
        {title}
      </h2>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && isHovered && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/80 hover:bg-black/95 transition-all duration-300 flex items-center justify-center"
            style={{ transform: 'translateX(0)' }}
          >
            <ChevronLeft size={40} className="text-white" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && isHovered && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/80 hover:bg-black/95 transition-all duration-300 flex items-center justify-center"
            style={{ transform: 'translateX(0)' }}
          >
            <ChevronRight size={40} className="text-white" />
          </button>
        )}

        {/* Movies Container */}
        <div
          ref={rowRef}
          onScroll={checkArrows}
          className="flex space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
