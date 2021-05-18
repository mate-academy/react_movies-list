import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../MovieCard/MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <Movie {...movie} key={movie.imdbId} />) }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MoviesList;
