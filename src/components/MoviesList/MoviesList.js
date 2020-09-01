import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <MovieCard key={films.imdbId} {...film} />
    ))}
  </div>
);

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  films: [],
};
