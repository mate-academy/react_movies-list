import React from 'react';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from '../shapes/MoviesListShape';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;
