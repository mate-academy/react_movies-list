import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => <MovieCard {...item} key={item.imdbId} />)}
  </div>
);

const arrayStructure = PropTypes.shape({
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  description: PropTypes.string,
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    arrayStructure,
  ).isRequired,
};
