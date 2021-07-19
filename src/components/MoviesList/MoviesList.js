import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <div className="card" key={film.imdbId}>
        <MovieCard {...film} />
      </div>
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
