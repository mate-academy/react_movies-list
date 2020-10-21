import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

import { MoviesListShape } from '../shapes/MoviesListShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} {...movie} />)}
  </div>
);

MoviesList.propTypes = MoviesListShape;
