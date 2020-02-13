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
  </div>
);

MoviesList.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  })),
};

MoviesList.defaultProps = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape({
    description: '',
  })),
};
