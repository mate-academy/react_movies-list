import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieType } from '../../types/Movie';

type Props = {
  movies: MovieType[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </>
);
