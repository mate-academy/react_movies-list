import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  moviesFromServer.map(movie => (
    <MovieCard {...movie} key={movie.imdbId} />
  ))
);
