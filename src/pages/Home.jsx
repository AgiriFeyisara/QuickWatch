import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import movieTitles from "../data/data";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const promises = movieTitles.map((title) =>
          fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              title
            )}&apikey=${apiKey}`
          ).then((res) => res.json())
        );

        const results = await Promise.all(promises);
        const validMovies = results.filter(
          (movie) => movie.Response === "True"
        );
        setMovies(validMovies);
      } catch (err) {
        console.error(err);
        setError("Error fetching initial movies.");
      }
    };

    fetchInitialMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      console.error(err);
      setMovies([]);
      setError("Network error. Please try again.");
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
