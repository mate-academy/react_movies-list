import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movies.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  }).isRequired,
};
