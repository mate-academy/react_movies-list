import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    { movies.map(movie => <MovieCard data={movie} key={movie.imdbId} />)}
  </>
);

MoviesList.defaultProps = {
  movies: [],
  movie: {},
};

MoviesList.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    imdbUrl: PropTypes.string,
    imdbId: PropTypes.string,
  }),
  movies: PropTypes.PropTypes.arrayOf(PropTypes.object),
};
