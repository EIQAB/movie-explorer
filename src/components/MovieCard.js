function MovieCard({ title, year, rating, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt="movie" />
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>⭐ {rating}</p>
    </div>
  );
}

export default MovieCard;