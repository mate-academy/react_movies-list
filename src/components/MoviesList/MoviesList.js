import React from 'react';
import PropTypes from 'prop-types';
import Moviecard from '../MovieCard/MovieCard';
import { MovieShape } from '../MovieShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {
      movies.map(item => <Moviecard movie={item} />)
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};

export default MoviesList;
