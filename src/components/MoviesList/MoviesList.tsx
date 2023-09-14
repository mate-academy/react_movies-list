import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MovieListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
