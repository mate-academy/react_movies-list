import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesList }) => (
  <ul className="movies">
    {moviesList.map(item => (
      <li className="card" key={item.imdbId}>
        <MovieCard {...item} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
