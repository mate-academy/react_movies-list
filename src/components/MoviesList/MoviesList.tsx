import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

import { Movie } from '../../types/Movietypes';

export type PropsMovieList = {
  movies: Movie[];
};

export const MovieList: React.FC<PropsMovieList> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
