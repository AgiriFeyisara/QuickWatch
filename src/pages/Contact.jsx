import React from "react";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6 shadow-md">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </nav>

      {/* Intro text */}
      <div className="p-6 text-center">
        <h2 className="text-lg text-gray-700">
          We’d love to hear from you! Whether it’s feedback, questions, or
          suggestions about your favorite movies, reach out below.
        </h2>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center mb-6">
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4">
          <div>
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
