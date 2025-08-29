import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const keywords = [
          "a",
          "the",
          "love",
          "man",
          "war",
          "night",
          "day",
          "life",
        ];
        const randomKeyword =
          keywords[Math.floor(Math.random() * keywords.length)];

        const res = await fetch(
          `https://www.omdbapi.com/?s=${randomKeyword}&type=movie&page=1&apikey=${API_KEY}`
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

          const shuffled = details.sort(() => 0.5 - Math.random());

          setMovies(shuffled);
          setFilteredMovies(shuffled);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  useEffect(() => {
    let results = movies;

    if (genre) {
      results = results.filter((m) =>
        m.Genre?.toLowerCase().includes(genre.toLowerCase())
      );
    }
    if (country) {
      results = results.filter((m) =>
        m.Country?.toLowerCase().includes(country.toLowerCase())
      );
    }
    if (year) {
      results = results.filter((m) => m.Year?.includes(year));
    }
    if (searchTerm) {
      results = results.filter((m) =>
        m.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMovies(results);
  }, [genre, country, year, searchTerm, movies]);

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6">
        <h1 className="text-2xl font-semibold">Movies</h1>
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </nav>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4">
        <div>
          <label className="mr-2">Genre:</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Country:</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="">All</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Year:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2020"
            className="border px-2 py-1"
          />
        </div>
      </div>
      <div className="flex-1">
        <SearchBar onSearch={(query) => setSearchTerm(query)} />
      </div>

      {/* Movie List */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                alt={movie.Title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <Link to={`/movies/${movie.imdbID}`}>
                  <h2 className="font-semibold cursor-pointer hover:underline">
                    {movie.Title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm">{movie.Genre}</p>
                <p className="text-gray-600 text-sm">{movie.Country}</p>
                <p className="text-gray-600 text-sm">{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load more random movies */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-8 py-2 mt-10 rounded hover:bg-blue-600"
          >
            Load more movies
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
