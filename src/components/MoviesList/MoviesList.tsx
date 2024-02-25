import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard movie={movie} />
    ))}
    ;
  </>
);

type Props = {
  movies: Movie[];
};
