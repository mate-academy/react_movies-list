import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map((movie: Movie) => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </>
);
