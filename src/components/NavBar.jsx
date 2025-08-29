import React from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.svg";
import X from "../assets/close.svg";
import Logo from "../assets/QuickWatch.svg";
import useAppStore from "../store/useAppStore";

const NavBar = () => {
  const { isOpen, toggleMenu, closeMenu } = useAppStore();

  return (
    <div className="bg-gray-900 text-white">
      <nav className="flex items-center justify-between p-4 px-6">
        <img src={Logo} alt="QuickWatch Logo" className="h-6 w-auto" />

        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
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

        <div className="hidden md:flex">
          <Link to="/howtodownload" className="hover:text-yellow-400">
            How to Download
          </Link>
        </div>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <img src={X} alt="Close menu" className="h-6 w-6" />
          ) : (
            <img src={Menu} alt="Open menu" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-2 px-6 pb-4 bg-gray-800">
          <Link
            to="/"
            className="w-full px-3 py-2 rounded-md hover:bg-gray-700 hover:border hover:border-yellow-400 hover:text-yellow-400 transition"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="w-full px-3 py-2 rounded-md hover:bg-gray-700 hover:border hover:border-yellow-400 hover:text-yellow-400 transition"
            onClick={closeMenu}
          >
            Movies
          </Link>
          <Link
            to="/contact"
            className="w-full px-3 py-2 rounded-md hover:bg-gray-700 hover:border hover:border-yellow-400 hover:text-yellow-400 transition"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/howtodownload"
            className="w-full px-3 py-2 rounded-md hover:bg-gray-700 hover:border hover:border-yellow-400 hover:text-yellow-400 transition"
            onClick={closeMenu}
          >
            How to Download
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
