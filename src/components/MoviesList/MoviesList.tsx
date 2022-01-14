import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movies';

type Movies = {
  movies: Movie[],
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li><MovieCard currentMovie={movie} /></li>
    ))}
  </ul>
);
