import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ data }) => (
  <div className="movies">
    {data.map(movieInfo => (
      <MovieCard key={movieInfo.id} info={movieInfo} />))}
  </div>
);

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
