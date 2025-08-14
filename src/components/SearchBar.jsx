import React, { useState } from "react";
import SearchIcon from "../assets/search1.svg";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Call parent function
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 relative w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-2 pl-10 pr-4 rounded-md bg-[#3A86FF] text-white placeholder-white focus:outline-none"
      />
      <img
        src={SearchIcon}
        alt="search"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-5 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBar;
