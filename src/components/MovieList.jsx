import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 mb-12 p-7 justify-center">
        {movies.map((movie) => (
          <div
            key={movie.imdbID || movie.Title} // fallback if imdbID missing
            className="bg-white rounded-lg shadow-md w-60"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              className="w-full h-56 object-cover"
            />
            <div className="p-2 text-center">
              <Link to={`/movies/${movie.imdbID}`}>
                <p className="font-semibold cursor-pointer hover:underline">
                  {movie.Title}
                </p>
              </Link>

              <p className="text-gray-700">{movie.Year}</p>
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
