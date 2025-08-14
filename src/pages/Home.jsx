import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import featuredMovies from "../data/data";

const Home = () => {
  const [movies, setMovies] = useState(featuredMovies);
  const [error, setError] = useState(""); // For API errors

  // Function to fetch movies from OMDB API
  const handleSearch = async (query) => {
    try {
      setError(""); // Reset previous errors
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search); // Update movie list
      } else {
        setMovies([]); // Clear movies if none found
        setError(data.Error); // Show API error message
      }
    } catch (err) {
      setMovies([]);
      setError("Network error. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center my-4">{error}</p>}
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default Home;
