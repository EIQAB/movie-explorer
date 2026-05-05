import React, { useState } from "react";
import movies from "../data/movies";

function Home({ onSelectMovie }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("title");

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="home-container">
      <h1>  Movie Explorer</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Sort by Title</option>
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>

      <p>{filteredMovies.length} movie(s) found</p>

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>  {movie.year}</p>
            <p>  {movie.rating}</p>
            <p>  {movie.genre}</p>
            <p>  {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;