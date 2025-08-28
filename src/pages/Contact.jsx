import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert(`Form submitted successfully!`);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white px-6 shadow-md">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:underline hover:text-yellow-400">
            <img src={Arrow} alt="back" className="w-4 h-4" />
            <p>Back</p>
          </div>
        </Link>
      </nav>

      <div className="p-6 text-center">
        <h2 className="text-lg text-gray-700">
          We’d love to hear from you! Whether it’s feedback, questions, or
          suggestions about your favorite movies, reach out below.
        </h2>
      </div>

      <div className="flex justify-center mb-6">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
