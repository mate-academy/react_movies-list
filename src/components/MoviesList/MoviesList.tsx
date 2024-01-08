import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type List = {
  movies: Movie[];
};

export const MoviesList: React.FC<List> = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard movie={film} />
    ))}
  </div>
);
