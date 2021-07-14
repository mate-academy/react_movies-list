import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Test } from '../MovieCard/Test';

const MovieList = ({ moviesFromServer }) => (
  <div className="page-content">
    <div className="movies">
      { moviesFromServer.map(x => <MovieCard key={x.title} {...x} />) }
    </div>
  </div>
);

MovieList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(
    PropTypes.shape(Test),
  ).isRequired,
};

export default MovieList;
