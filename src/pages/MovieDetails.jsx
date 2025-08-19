import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../assets/arrow.svg";

const MovieDetails = () => {
  const { imdbID } = useParams(); // Get the movie ID from URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = "8b640a2c";
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        console.error(err);
        setError("Network error. Please try again.");
      }
    };

    fetchMovie();
  }, [imdbID]);

  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
  if (!movie) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="bg-[#0D1B2A] min-h-screen text-white p-6">
      <div className="mb-5 flex items-center gap-5">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full md:w-64"
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">
            {movie.Title} ({movie.Year})
          </h1>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Cast:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Ratings:</strong>{" "}
            {movie.Ratings.map((r) => `${r.Source}: ${r.Value}`).join(", ")}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="bg-[#3A86FF] Text-white-400 p-3 mt-5 rounded">
          Watch Trailer
        </button>
        <button className="bg-[#3A86FF] Text-white-400 p-3 mt-5 rounded">
          Add to Watch list +
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
