import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
// eslint-disable-next-line import/no-cycle
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
