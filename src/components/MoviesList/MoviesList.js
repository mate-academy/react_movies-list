import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviePropTypes } from '../MovieCard/MoviePropTypes';

const MovieList = ({ moviesFromServer }) => (
  <div className="page-content">
    <div className="movies">
      { moviesFromServer.map(item => <MovieCard key={item.title} {...item} />) }
    </div>
  </div>
);

MovieList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(
    PropTypes.shape(MoviePropTypes),
  ).isRequired,
};

export default MovieList;
