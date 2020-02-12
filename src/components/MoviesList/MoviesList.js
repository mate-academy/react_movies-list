import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ MoviesArrApi }) => (
  <>
    <div className="movies">
      {MoviesArrApi.map(movie => (
        <MovieCard {...movie} />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  MoviesArrApi: PropTypes.arrayOf.isRequired,
};
