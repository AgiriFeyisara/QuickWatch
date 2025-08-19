import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const Movies = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6">
        <h1 className="text-2xl font-semibold">Movies</h1>
      </nav>

      <SearchBar />
      <Footer />
    </div>
  );
};

export default Movies;
