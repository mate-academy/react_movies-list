import { FC } from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MoviesProps = {
  movies: Movie[];
};

export const MoviesList: FC<MoviesProps> = ({ movies }) => (
  <ul>
    {movies.map((movie: Movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </ul>
);
