import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from '../../shapes/MoviesListShape';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (
      <MovieCard {... movie} key="movie.imdbId" />
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;
