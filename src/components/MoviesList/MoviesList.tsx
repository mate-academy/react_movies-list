import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type MovieType = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieType> = ({ movies = [] }) => (
  <div className="movies">
    { movies.map(film => (
      <MovieCard movie={film} />))}
  </div>
);
