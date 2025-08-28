import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
      <Link
        to="/movies"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Movies
      </Link>
    </div>
  );
};

export default PageNotFound;
