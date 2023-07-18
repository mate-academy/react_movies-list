import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MoviesListProps = {
  movies: Movie[]
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map(
      (movie) => {
        return (
          <MovieCard movie={movie} key={movie.imdbId} />
        );
      },
    )}
  </div>
);
