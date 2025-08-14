import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/QuickWatch.svg";

const NavBar = () => {
  return (
    <div className="bgcolor-blue">
      <nav className="flex items-center justify-between p-4 px-6 bg-gray-900 text-white">
        <img src={Logo} alt="QuickWatch Logo" className="h-6 w-auto" />
        <div className="flex items-center space-x-6 text-500">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/movies" className="hover:text-yellow-400">
            Movies
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>
        <Link to="/howtodownload" className="hover:text-yellow-400">
          How to Download
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
