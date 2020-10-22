import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from '../../shapes/MoviesListShapes';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;
