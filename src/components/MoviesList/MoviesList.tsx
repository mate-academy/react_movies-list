import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </>
);
