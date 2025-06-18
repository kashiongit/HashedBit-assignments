import { useParams, useNavigate } from "react-router-dom";
import mockMovies from "../data/Movies";

 function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = mockMovies.find(m => m.id === parseInt(id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;