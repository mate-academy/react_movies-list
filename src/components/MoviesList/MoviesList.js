import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { TypesMovie } from '../../types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard {...film} key={film.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(TypesMovie).isRequired,
};
