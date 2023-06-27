import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} />
    ))}
  </ul>
);
