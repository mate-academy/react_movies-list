import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  <>
    {moviesFromServer.map(item => (
      <MovieCard key={item.imdbId} {...item} />
    ))}
  </>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
  })).isRequired,
};
