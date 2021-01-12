import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard';

export const MoviesList = props => (
  <>
    {props.movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
