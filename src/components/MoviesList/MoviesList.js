import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../MovieCard/movieCardShape';

export const MoviesList = ({ data }) => (
  <div className="movies">
    {data.map(movieData => (
      <MovieCard {...movieData} key={movieData.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  data: PropTypes.arrayOf(MovieCardShape).isRequired,
};
