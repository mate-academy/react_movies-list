import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MoviesProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesProps> = ({ movies }) => (
  <>
    {movies.map((movie: Movie) => <MovieCard movie={movie} />) }
  </>
);
