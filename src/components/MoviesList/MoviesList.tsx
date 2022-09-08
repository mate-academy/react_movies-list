import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MovieType = {
  movies: Movie[];
};

/* eslint-disable max-len */
export const MoviesList: React.FC<MovieType> = ({ movies }) => (
  <div className="movies">
    {movies.map(kino => <MovieCard key={kino.imdbId} movie={kino} />)}
  </div>
);
