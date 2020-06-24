import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { movieShape } from '../variables';
import { MovieCard } from '../MovieCard/MovieCard';

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
  movies: PropTypes.arrayOf(
    movieShape,
  ).isRequired,
};
