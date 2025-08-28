import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HowToDownload from "./pages/HowToDownload";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/howtodownload" element={<HowToDownload />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
