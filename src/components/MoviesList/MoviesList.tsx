import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie []
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </>
);
