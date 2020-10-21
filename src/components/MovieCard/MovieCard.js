import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList/MoviesList';
import './MovieCard.scss';

export const MovieCard = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MoviesList {...movie} />
      </div>
    ))}
  </div>
);

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MovieCard.defaultProps = {
  movies: [],
};
