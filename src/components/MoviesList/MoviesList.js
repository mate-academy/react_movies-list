import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="page-content">
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
