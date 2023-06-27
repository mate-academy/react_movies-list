import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(cine => (
      <MovieCard
        key={movies.imdbId}
        cine={cine}
      />
    ))}
  </div>
);
