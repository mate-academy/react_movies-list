import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ src }) => (
  <div className="movies">
    {src.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  src: PropTypes.arrayOf(
    PropTypes.shape = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    },
  ).isRequired,
};
