import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies: list }) => (
  <div className="movies">
    {list.map((movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
