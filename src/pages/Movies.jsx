import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");

  const API_KEY = "8b640a2c";

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`
      );
      const data = await res.json();
      if (data.Search) {
        const details = await Promise.all(
          data.Search.map(async (movie) => {
            const res = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
            );
            return res.json();
          })
        );
        setMovies(details);
        setFilteredMovies(details);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    let results = movies;
    if (genre) {
      results = results.filter((m) => m.Genre?.includes(genre));
    }
    if (country) {
      results = results.filter((m) => m.Country?.includes(country));
    }
    setFilteredMovies(results);
  }, [genre, country, movies]);

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6">
        <h1 className="text-2xl font-semibold">Movies</h1>
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </nav>

      {/* Filters */}
      <div className="flex items-center gap-10 p-4">
        <div>
          <label className="mr-2">Filter by Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Filter by Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">All</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
        </div>
      </div>
      <SearchBar />

      <div className="p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3">
                  <h2 className="text-gray-900 font-semibold">{movie.Title}</h2>
                  <p className="text-gray-600 text-sm">{movie.Genre}</p>
                  <p className="text-gray-600 text-sm">{movie.Country}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <button className="bg-blue-500 text-white px-8 py-2 mt-10 rounded hover:bg-blue-600">
              Load more movies
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
