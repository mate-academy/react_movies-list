import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesData }) => (
  <div className="movies">
    {
      moviesData.map(movie => (
        <MovieCard key={movie.imdbID} {...movie} />
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
