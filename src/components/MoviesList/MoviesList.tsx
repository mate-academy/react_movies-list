import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard
        movie={film}
        key={film.imdbId}
      />
    ))}
  </div>
);
