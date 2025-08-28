import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Arrow from "../assets/arrow.svg";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Check if movie is already in watchlist
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setAdded(watchlist.some((m) => m.imdbID === imdbID));
  }, [imdbID]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = import.meta.env.VITE_OMDB_API_KEY;
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

  const handleWatchTrailer = (title) => {
    const query = encodeURIComponent(`${title} trailer`);
    window.open(
      `https://www.youtube.com/results?search_query=${query}`,
      "_blank"
    );
  };

  const toggleWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const movieIndex = watchlist.findIndex((m) => m.imdbID === movie.imdbID);

    if (movieIndex >= 0) {
      // Remove movie
      watchlist.splice(movieIndex, 1);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      setAdded(false);
      alert(`${movie.Title} has been removed from your watchlist.`);
    } else {
      // Add movie
      watchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      setAdded(true);
      alert(`${movie.Title} has been added to your watchlist!`);
    }
  };

  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
  if (!movie) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="bg-[#0D1B2A] min-h-screen text-white p-6">
      <div className="mb-5 flex items-center gap-5">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={Arrow} alt="back" className="w-4 h-4" />
          <p>Back</p>
        </div>
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

      <div className="flex gap-4 mt-5">
        <button
          className="bg-[#3A86FF] text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => handleWatchTrailer(movie.Title)}
        >
          Watch Trailer
        </button>

        <button
          className="bg-[#3A86FF] text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleWatchlist}
        >
          {added ? "Remove from Watchlist" : "Add to Watchlist +"}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
