import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesList }) => (

  moviesList.map((item) => {
    const { imdbId, ...itemProps } = item;

    return (
      <MovieCard key={imdbId} {...itemProps} />
    );
  })
);
