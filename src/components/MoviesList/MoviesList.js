import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => <MovieCard {...movie} key={movie.imdbId} />)}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    imdbUrl: PropTypes.string,
    imdbId: PropTypes.string,
  })).isRequired,
};
