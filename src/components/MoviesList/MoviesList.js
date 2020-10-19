import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesData }) => (
  <div className="movies">
    {
      moviesData.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))
    }
  </div>
);

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
