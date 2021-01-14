import React from 'react';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from '../Shapes/MoviesListShape';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;
