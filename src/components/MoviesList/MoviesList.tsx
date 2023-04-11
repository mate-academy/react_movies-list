import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MovieListProp = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieListProp> = ({ movies }) => {
  return (
    <>
      {movies.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </>
  );
};
