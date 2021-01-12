import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardType } from '../../types';
import './MoviesList.scss';

export const MoviesList = ({ source }) => (
  <div className="movies">
    {source.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.defaultProps = {
  source: '',
};

MoviesList.propTypes = {
  source: PropTypes.arrayOf(MovieCardType),
};
