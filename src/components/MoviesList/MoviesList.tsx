import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movie[]
};

export const MoviesList = ({ movies }: Props) => (
  <div className="movies">
    {movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
  </div>
);
