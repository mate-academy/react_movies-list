import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListTypes } from '../../types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => <MovieCard {...item} key={item.imdbId} />)}
  </div>
);

MoviesList.propTypes = MoviesListTypes;
