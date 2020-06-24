import React from 'react';
import './MoviesList.scss';
import { ShapeMovieList } from '../Shapes';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    { moviesList.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = ShapeMovieList.isRequired;
