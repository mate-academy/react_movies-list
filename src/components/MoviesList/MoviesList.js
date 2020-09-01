import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  movies.map(movie => (
    <MovieCard
      key={movie.imdbId}
      title={movie.title}
      imgUrl={movie.imgUrl}
      description={movie.description}
      imdbLink={movie.imdbUrl}
    />
  ))
);

MoviesList.PropTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
