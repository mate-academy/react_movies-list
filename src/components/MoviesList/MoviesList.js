import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (
      <MovieCard key={movie.imdbId} value={movie} />
    ))
    }
  </div>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default MoviesList;
