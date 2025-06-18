import { useNavigate } from "react-router-dom";

 function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;