import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
