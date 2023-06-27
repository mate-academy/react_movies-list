import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {
      movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))
    }
  </div>
);
