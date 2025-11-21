import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MovieListProps) => (
  <div className="movies">
    {movies.map(movie => {
      return <MovieCard key={movie.imdbId} movie={movie} />;
    })}
  </div>
);
