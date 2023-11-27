import './MoviesList.scss';
import { MovieInt } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type ListProps = {
  movies: MovieInt[]
};

export const MoviesList: React.FC<ListProps> = ({ movies }) => (
  <div className="page-content">
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          movie={movie}
          key={movie.imdbId}
        />
      ))}
    </div>
  </div>
);
