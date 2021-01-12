import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
// import './MoviesList.scss';

export const MoviesList = ({ prop }) => (
  <div className="movies">
    {prop.map(movie => <MovieCard {...movie} key={movie.imdbId} />)}
  </div>
);

MoviesList.propTypes = {
  prop: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
  })).isRequired,
};
