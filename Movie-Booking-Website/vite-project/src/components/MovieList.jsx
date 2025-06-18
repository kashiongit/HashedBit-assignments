import mockMovies from "../data/Movies";

import MovieCard from "./MovieCard";
import "./styles.css";

function MovieList() {
  return (
   <div>
     <h1 className="title"> welcome to  movie mania</h1>
     <div className="grid-container">
      
      {mockMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
   </div>
  );
}

export default MovieList;