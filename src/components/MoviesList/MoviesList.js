import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { ShapedMovie } from '../ShapedMovie/ShapedMovie';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(ShapedMovie).isRequired,
};
