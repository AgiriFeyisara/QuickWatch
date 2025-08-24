import React from "react";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </nav>
      <h1 className="p-6">
        We’d love to hear from you! Whether it’s feedback, questions, or
        suggestions about your favorite movies, reach out below.
      </h1>
      <form>
        <div>
          <label htmlFor="Name"> Name</label>
          <input type="text" id="Name" className="" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
