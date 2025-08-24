import React from "react";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const HowToDownload = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6 shadow-md">
        <h1 className="text-2xl font-semibold">How to Download</h1>
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </nav>

      <div className="p-6 text-center">
        <h3 className="text-lg font-medium mb-2">
          Follow these steps to download movies and TV shows to your device:
        </h3>
        <p className="text-gray-600">
          Simple guide to enjoy your favorite content offline 📥
        </p>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <p className="border-l-4 border-blue-500 pl-3">
          <span className="font-semibold">1. Search or Browse →</span> Find the
          movie or TV show you want in the search bar or browse by category.
        </p>
        <p className="border-l-4 border-blue-500 pl-3">
          <span className="font-semibold">2. Open Details Page →</span> Click
          the poster to view details.
        </p>
        <p className="border-l-4 border-blue-500 pl-3">
          <span className="font-semibold">3. Tap Download Button →</span> Look
          for the ‘Download’ icon under the movie player.
        </p>
        <p className="border-l-4 border-blue-500 pl-3">
          <span className="font-semibold">4. Choose Quality →</span> Select
          video quality (Low, Medium, High).
        </p>
        <p className="border-l-4 border-blue-500 pl-3">
          <span className="font-semibold">5. Wait for Completion →</span> Once
          the download finishes, you can watch offline anytime.
        </p>
      </div>
    </div>
  );
};

export default HowToDownload;
