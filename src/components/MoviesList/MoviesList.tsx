import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movie: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movie = [] }) => (
  <div className="movies">
    {movie.map(itemMovie => (
      <MovieCard movie={itemMovie} />
    ))}
  </div>
);
