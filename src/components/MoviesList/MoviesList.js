import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { TypeFilm } from '../../type';

export const MoviesList = ({ films }) => (
  <div className="movies">
    {films.map(film => (<MovieCard key={film.imdbId} {...film} />))}
  </div>
);

MoviesList.propTypes = {
  films: PropTypes.arrayOf(TypeFilm).isRequired,
};
