import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

export const MoviesList = ({ ...moviesObject }) => (
  <div className="movies">
    {moviesObject.movies.map(
      (movie: Movie) => {
        return (
          <MovieCard {...movie} key={movie.imdbId} />
        );
      },
    )}
  </div>
);
