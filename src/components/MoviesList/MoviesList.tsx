/* eslint-disable max-len */
import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MovieProp {
  movies: Movie[]
}

export const MoviesList: React.FC<MovieProp> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
