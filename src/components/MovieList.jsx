import React, { useEffect, useState } from "react";
import movieTitles from "../data/data";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "8b640a2c"; // Replace with your OMDb key
        const fetchedMovies = [];

        for (let title of movieTitles) {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              title
            )}&apikey=${apiKey}`
          );
          const data = await response.json();
          if (data.Response === "True") {
            fetchedMovies.push(data);
          }
        }

        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-6 mb-12 p-7 justify-center">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white rounded-lg shadow-md w-60"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              className="w-full h-56 object-cover"
            />
            <div className="p-2 text-center">
              <p className="font-semibold cursor-pointer hover:underline">
                {movie.Title}
              </p>
              <p className="text-gray-700 cursor-pointer hover:underline">
                {movie.Year}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <button className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600">
          Load more movies
        </button>
      </div>
    </div>
  );
};

export default MovieList;
