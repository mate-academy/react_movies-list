import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard, typeOfData } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(typeOfData),
  ).isRequired,
};
