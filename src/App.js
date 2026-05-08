import { useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const movies = [
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      image: "https://m.media-amazon.com/images/I/51NbVEuw1HL._AC_.jpg",
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    },
    {
      title: "Batman",
      year: 2022,
      rating: 7.9,
      image: "https://m.media-amazon.com/images/I/71nXiI31xLL._AC_SY679_.jpg",
    },
  ];

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "rating") return b.rating - a.rating;
      if (sortType === "year") return b.year - a.year;
      return 0;
    });

  return (
    <div className="app">
      <h1>Movie Explorer 🎬</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;