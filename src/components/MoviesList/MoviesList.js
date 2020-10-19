import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (
      <MovieCard {... movie} key="movie.imdbId" />
    ))}
  </div>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    },
  ).isRequired,
};
