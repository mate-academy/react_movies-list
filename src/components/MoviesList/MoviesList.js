import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(moviesVAl => (
      <MovieCard key={moviesVAl.imdbId} {...moviesVAl} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imgUrl: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};
