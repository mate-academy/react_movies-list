import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ dataFromServer }) => (
  <div>
    <div className="movies">
      {dataFromServer.map(movieData => (
        <MovieCard key={movieData.imdbId} movieInfo={movieData} />
      ))}
    </div>

    <div className="sidebar">
        Sidebar will be here
    </div>
  </div>
);

MoviesList.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
