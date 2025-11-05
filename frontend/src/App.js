import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import { mockMovies } from "./mockData";

const Home = () => {
  return (
    <div className="bg-[#141414] min-h-screen">
      <Navbar />
      <HeroBanner />
      
      <div className="relative z-10 -mt-32 md:-mt-40 space-y-4 pb-10">
        <MovieRow title="Trending Now" movies={mockMovies.trending} />
        <MovieRow title="Netflix Originals" movies={mockMovies.netflixOriginals} />
        <MovieRow title="Action Movies" movies={mockMovies.action} />
        <MovieRow title="Comedy" movies={mockMovies.comedy} />
        <MovieRow title="Horror" movies={mockMovies.horror} />
        <MovieRow title="Documentaries" movies={mockMovies.documentaries} />
        <MovieRow title="Romance" movies={mockMovies.romance} />
      </div>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
