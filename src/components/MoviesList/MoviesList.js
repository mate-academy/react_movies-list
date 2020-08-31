import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = props => (
  <div className="movies">
    {
      props.moviesFromServer.map(movie => <MovieCard {...movie} />)
    }
  </div>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(PropTypes.object).isRequired,
};
