import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

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
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
