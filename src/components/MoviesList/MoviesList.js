import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <MovieCard {...film} />
    ))}
  </div>
);

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.number.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  films: [],
};
