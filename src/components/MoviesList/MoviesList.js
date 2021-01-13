
import React from 'react';
import PropTypes from 'prop-types';
import { TypeList } from '../../types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(TypeList).isRequired,
};
