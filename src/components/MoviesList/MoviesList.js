import React from 'react';
import PropTypes from 'prop-types';
import Moviecard from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => <Moviecard movie={item} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default MoviesList;
