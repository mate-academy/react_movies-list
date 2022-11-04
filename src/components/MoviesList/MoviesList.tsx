import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Prop = {
  movies: Movie[];
};

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <li className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </li>
);
