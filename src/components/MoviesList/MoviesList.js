import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ info }) => (
  <div className="movies">
    {info.map(movieData => (
      <MovieCard key={movieData.imdbId} info={movieData} />
    ))
    }
  </div>
);

MoviesList.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
