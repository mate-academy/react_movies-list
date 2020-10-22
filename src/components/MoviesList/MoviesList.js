import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieCardPropType } from '../proptypes/MovieCardPropTypes';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard {...movie} key={movie.imdbId} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(MovieCardPropType),
  ).isRequired,
};
