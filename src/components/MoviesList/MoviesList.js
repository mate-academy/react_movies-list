import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ films }) => (
  <ul className="movies">
    {films.map(film => (
      <li className="card" key={film.imdbId}>
        <MovieCard {...film} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
      imdbUrl: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  films: {},
};
