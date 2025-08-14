import React from "react";
import Logo from "../assets/QuickWatch.svg";
import Copyright from "../assets/copyright.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] h-[150px] px-6 flex flex-col md:flex-row items-center justify-between text-white">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <img src={Logo} alt="QuickWatch Logo" className="h-6 w-auto" />
      </div>

      {/* Copyright */}
      <div className="flex items-center space-x-2">
        <img src={Copyright} alt="Copyright" className="h-5 w-5" />
        <p className="text-sm">Copyright 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
