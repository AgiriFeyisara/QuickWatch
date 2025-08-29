- QuickWatch Movie App

QuickWatch is a web application built with React and Vite that allows users to explore movies, view detailed information, watch trailers, and manage a personal watchlist. The app fetches real-time movie data from the OMDb API and offers filtering by genre, country, and year.

- Project Overview

Finding movies and keeping track of what to watch can be overwhelming. QuickWatch provides a centralized platform where users can:

Discover movies randomly or via filters.

View detailed information about each movie.

Quickly access trailers on YouTube.

Save movies to a personal watchlist for future viewing.

This solves the problem of scattered movie information and helps users organize their movie-watching experience efficiently.

- Key Features

Browse Movies

Fetches a list of movies using the OMDb API.

Displays movie poster, title, genre, country, year, and ratings.

Movie Details Page

Shows full movie information including cast, plot, language, and ratings.

Watch Trailer button opens a YouTube search for the movie trailer.

Add to Watchlist button saves movies to localStorage to track favorites.

Filter and Search

Filter movies by genre, country, or year.

Search bar to find specific movies (optional feature to implement).

Watchlist Management

Users can save favorite movies to a personal watchlist.

Avoids duplicates to keep the list organized.

Responsive Design

Mobile-friendly layout with flexible grids for movie cards.

Navigation and buttons adapt to smaller screens.

Error Handling

Handles API errors and missing movies gracefully.

Displays friendly messages when movies cannot be fetched

- Technologies Used

React.js (Frontend)

Vite (Project bundler)

React Router (Navigation)

Tailwind CSS (Styling)

OMDb API (Movie Apidata)

Zustand (State Management)

Formik (Form Handling)

LocalStorage (Watchlist management)
