import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { ShapeMovieCard } from '../Shapes/ShapesMovieCard';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(ShapeMovieCard).isRequired,
};
