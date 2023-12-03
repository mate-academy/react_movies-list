/* eslint-disable max-len */
import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MovieProp {
  movieArray: Movie[]
}

export const MoviesList: React.FC<MovieProp> = ({ movieArray }) => (
  <div className="movies">
    {movieArray?.map((movie: Movie) => (
      <MovieCard movie={movie} />
    ))}
  </div>
);
