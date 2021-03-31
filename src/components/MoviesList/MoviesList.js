import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { movieType } from '../../types/shapes';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => (
      <div className=".card" key={item.imdbId}>
        <MovieCard {...item} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(movieType),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
