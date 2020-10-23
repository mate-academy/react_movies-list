import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../Shapes/MovieCardShape';
import './MoviesList.scss';

export const MoviesList = ({ moviesList }) => (
  <ul className="movies">
    {
      moviesList.map(movie => (
        <MovieCard {...movie} key={movie.imdbId} />
      ))
    }
  </ul>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(MovieCardShape).isRequired,
};
