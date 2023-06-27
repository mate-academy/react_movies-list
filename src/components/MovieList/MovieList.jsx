import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movieElement => (
      <MovieCard movie={movieElement} key={movieElement.imdbId} />
    ))}
  </div>
);
