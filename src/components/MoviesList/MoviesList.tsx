import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
}
export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <>
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
  </>
);
