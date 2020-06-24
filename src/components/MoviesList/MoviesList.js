import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard, MovieCardShape } from '../MovieCard/MovieCard';

export const MoviesList = ({ data }) => (
  <div className="movies">
    {data.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  data: PropTypes.arrayOf(MovieCardShape).isRequired,
};
