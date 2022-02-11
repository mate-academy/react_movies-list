import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div>
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.title}>
          <MovieCard
            {...movie}
          />
        </li>
      ))}
    </ul>
  </div>

);
