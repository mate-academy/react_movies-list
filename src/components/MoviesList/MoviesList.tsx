/* eslint-disable max-len */
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul>
    {movies.map(movie => <li key={movie.imdbId}><MovieCard movie={movie} /></li>)}
  </ul>
);
