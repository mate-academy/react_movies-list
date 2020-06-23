import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  movies.map(specificFilm => (
    <div className="card" key={specificFilm.imdbId}>
      <MovieCard {...specificFilm} />
    </div>
  ))
);
